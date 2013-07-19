title: "Tableau auto-extensible en JavaScript"
id: 680
date: 2007-06-26 13:59:32
tags:
- ajax
- bonne pratique
- code
- dom
- html
- mootools
categories:
- JavaScript
- Accessibilité
- Développement Web
cover: /images/2007/06/articles-autoexpand-mini.png
---

Bon nombre de clients utilisant les sites Internet de mon employeur passent des commandes en saisissant directement les codes articles de leur choix. Ce n'est pas anodin : pour du réassort de magasin, ils savent exactement ce qu'ils veulent. Et un beau jour on vient me voir en me disant qu'<cite>ils ne peuvent saisir qu'un code et une seule quantité à la fois</cite>, qu'il faudrait changer ça.

Voici donc mon constat de départ :

*   un client doit pouvoir saisir _un seul article_ s'il le veut
*   un client doit pouvoir saisir _10 articles_ s'il le veut
*   un client doit pouvoir saisir _100 articles_ s'il le veut
*   mais **celui qui n'en saisit que 10 ne doit pas être gêné par 100 lignes de formulaire à remplir**
*   un _débutant_ doit pouvoir saisir 100 lignes sans avoir de mode d'emploi sous la main

Donc ma solution a été très simple : **je ne mettrai qu'une ligne**.

<!--more-->

## L'idée

Comment faire pour satisfaire tout le monde, les gros donneurs d'ordre comme les petits ?
**En faisant en sorte que le formulaire s'adapte à leur besoin.** Je voulais donc qu'à chaque ligne complétée s'en ajoute une autre avant de passer à la validation finale. Place au combo **JavaScript + DOM = Ajax**.

## La version dégradée

Une _bonne pratique de l'Ajax_ est de partir du cas particulier : celui où les conditions ne sont pas requises. En clair, une personne qui n'a pas JavaScript d'activé ou pas de JavaScript tout court.
Conclusion, j'ai décidé de générer un tableau en HTML de 10 lignes. 10 est un choix arbitraire, modifiable à tout moment et qui ne doit donc pas gêner la version dynamique en cas de changement (ajout de colonne, ajout de lignes).

![Tableau auto-extansible dégradé](/images/2007/06/articles-autoexpand.png)

## La version Ajax

On peut manipuler le document à loisir grâce à JavaScript. **Avec un code propre et ordonné c'est d'autant plus simple**. Alors voici la logique à mettre en oeuvre :

1.  éliminer toutes les lignes dont on ne veut pas et n'en garder qu'une
2.  assigner à chaque champ de formulaire de la ligne (`input`, `select`, `textarea`) une fonction de vérification : si tous les éléments de la ligne sont remplis / cochés et qu'il n'y a pas de ligne après, on clonera la ligne
3.  cloner la ligne en la vidant de ses valeurs, en modifiant les noms de champ pour les rendre exploitable après coup


Ce qu'on l'on veut étant relativement simple, _le code doit l'être également_** ! Le résultat aussi, la preuve en mouvement.

<div style="text-align:center"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="372" height="188" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="https://oncletom.io/images/2007/06/articles-autoexpand.swf" /><embed type="application/x-shockwave-flash" width="372" height="188" src="https://oncletom.io/images/2007/06/articles-autoexpand.swf"></embed></object></div>

Au final, **50 lignes de JavaScript ont suffit** à transformer un tableau complètement statique en tableau dynamique, s'adaptant à la demande de n'importe quel client. Client qui pourra également utiliser le clavier pour davantage d'efficacité de saisie.

C'est à dire **exactement ce que l'on souhaitait au départ**.

## Le code

### Le tableau HTML

```html
<table cellspacing="0" id="ajout_multi_articles">
  <thead>
    <tr>
      <th>Code article</th>
      <th>Quantité</th>
    </tr>
  </thead>
  <tbody>
    <tr class="article">
      <th><input type="text" name="article[1][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[1][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[2][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[2][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[3][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[3][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[4][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[4][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[5][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[5][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[6][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[6][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[7][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[7][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[8][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[8][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[9][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[9][qte]" maxlength="5" size="5" /></td>
    </tr>
    <tr class="article">
      <th><input type="text" name="article[10][ref]" maxlength="10" /></th>
      <td><input type="text" name="article[10][qte]" maxlength="5" size="5" /></td>
    </tr>
  </tbody>
</table>
```

### La fonction JavaScript

```javascript
/**
 * Transforme un tableau multi-lignes en un tableau mono-ligne mais auto-extensible
 * Renomme également les noms de champ en suivant un masque paramétrable ; par défaut article[]
 *
 * @usage articlesMultiRows([{'css_id': ?, 'css_row_class': ?, 'check_inputs': ?}])
 * @param {Object} params Objet contenant (ou pas) les paramètres de contrôle de la classe
 */
function articlesMultiRows(params)
{
  this.row_number = 0;

  /*
   * Extension des paramètres par défaut
   */
  var params = params || {};
  params.css_id = params.css_id || 'ajout_multi_articles';
  params.css_row_class = params.css_row_class || 'article';
  params.check_inputs = params.check_inputs || 'input,select,textarea';

  /**
   * Initialise le tableau de données et accroche les méthodes dynamiques
   */
  this.init = function(){
    //aucun ID détecté, pas la peine de continuer plus loin
    if (!$(params.css_id))
    {
      return false;
    }

    //on récupère les lignes, on enlève la première du tableau et on supprime les autres
    var rows = $(params.css_id).getElements('tr.'+params.css_row_class);
    var row_first = rows.shift();
    rows.removeElements();
    rows = null;

    /*
     * On assigne l'évènement aux champs paramétrés de la ligne
     * On place le focus sur le premier champ
     */
    $ES(params.check_inputs, row_first).addEvent('blur', rowCheck);
    $(row_first).getElement('input').focus();
    row_number = 1;

    /*
     * On écrit un petit message sympathique indiquant le fonctionnement du bazar
     * On le fait via JavaScript car un utilisateur sans JS ne pourrait justement pas suivre les infos
     * Il est placé juste avant le tableau
     */
    new Element('p',{
          'class' : 'message'
          }).setHTML("Dès qu'un code article et une quantité sont saisis ci-dessous, <strong>une nouvelle ligne s'ajoute automatiquement</strong>.<br />Afin d'accélérer votre saisie, <em>utilisez la touche de tabulation de votre clavier</em> pour passer d'un champ à l'autre. Vous verrez, c'est facile et surtout efficace !").injectBefore(params.css_id);
  };

  /**
   * Vérifie si la ligne a entièrement été complétée et le cas échéant, déclenche l'ajout de ligne
   */
  this.rowCheck = function(){
    var row = { 'inputs' : 0, 'completed' : 0, 'dom' : $(this).getParent().getParent() };

    $ES(params.check_inputs, row.dom).each(function(input){
      //Un élément de plus ...
      ++row.inputs;

      //... dont on vérifie s'il est bien complété
      switch (input.getTag())
      {
        case 'input':
        case 'textarea':
          if (input.value.clean())
          {
            ++row.completed;
          }
        break;

        case 'select':
          if (input.selectedIndex >= 0 && input.selectedIndex < input.length)
          {
            ++row.completed;
          }
        break;
      }
    });

    /*
     * Pour insérer une nouvelle ligne, on doit avoir :
     * - autant de champs complétés que de champs existants
     * - aucun élément suivant
     */
    if (row.inputs === row.completed && !row.dom.getNext())
    {
      rowInsert(row.dom);
    }
  };

  /**
   * Insère une nouvelle ligne en clonant la dernière du tableau et la purgeant de ses valeurs
   *
   * @param {Object} row Noeud DOM correspondant à la ligne à cloner
   */
  this.rowInsert = function( row ){
    //On incrémente le nombre de lignes dispo
    //Ce numéro sert à changer les masques de nom de champ
    ++row_number;
    var row_clone = row.clone();

    //Clonage de la ligne
    $ES('input[type=text],input[type=password],input[type=hidden],textarea', row_clone).setProperty('value', '');
    $ES(params.check_inputs, row_clone).removeEvents('blur'); /* obligé car IE5+ clone aussi les évènements ... alors qu'il ne le devrait pas */
    $ES(params.check_inputs, row_clone).addEvent('blur', rowCheck); /* oui oui, IE5+ ne rassignait pas cet évènement comme il fallait malgré ça */
    //On remplace les noms des champs pour que permettre une utilisation des résultats $_POST
    $ES(params.check_inputs, row_clone).each(function(input){
      input.name = input.name.replace(new RegExp('^'+params.css_row_class+'\[[0-9]+\]'), params.css_row_class+'['+row_number+']');
    });

    //Injection de la ligne, une fois tout le travail terminé
    row_clone.injectAfter(row);

    //Nettoyage, le clonage, ça salit
    row_clone = null;
    row = null;
  };

  /*
   * Initialisation de la classe
   */
  this.init();
}

/*
 * Initialisation du tableau multi-lignes avec les options par défaut
 */
window.addEvent('domready', articlesMultiRows);
```