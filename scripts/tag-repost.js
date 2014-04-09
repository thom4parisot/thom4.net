"use strict";

var i18n = require('hexo/lib/core/i18n');
var t = new i18n();

t.set('en-GB', {
  repost_tag: "This blogpost has originally been published on %s as %s."
});

t.set('fr', {
  repost_tag: "Ce billet a été initialement publié sur %s sous l'intitulé %s."
});

hexo.extend.tag.register('repost', function(args, content, options){
  var data = {
    "url": args[0] || '',
    "title": Array.prototype.slice.call(args, 1).join(' ') || '',
    "domain": args[0].match(/\/\/([^\/]+)/)[1].replace('www.', '')
  };

  function replacer(occurence){
    return occurence.replace(/%([^%]+)%/g, function(m, key){
      return (data[key] && data[key].replace(/(^"|"$)/g, "")) || '';
    });
  }
  var lang = options.locals.lang || 'fr';
  var __ = t.__(lang);
  var text = __.bind(__, 'repost_tag').apply(null, [
    '<a href="http://%domain%" class="domain-link" rel="external">%domain%</a>',
    '<a href="%url%" class="source-link" rel="external">%title%</a>'
  ].map(replacer));

  return '<blockquote class="repost"><p>'+text+'</p></blockquote>';
});
