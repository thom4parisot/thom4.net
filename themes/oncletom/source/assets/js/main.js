(function(document, context){
  var tag = document.querySelector("link[rel='canonical']");
  var each = (function(){
      var slice = Array.prototype.slice;

      return function(data, callback){
          return slice.call(data).map(callback);
      };
  })();

  // Togglable navigation
  if (typeof requestAnimationFrame === 'function') {
    var elements = document.querySelectorAll('header.header, footer.footer');
    var nav = document.querySelector('header.header .navbar');

    var raf = function(){
      updateElementVisiblityAgainst(nav, elements);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }

  // Toggle menu
  var toggleButton = document.getElementById('static-top-navbar-toggle-button');
  var toggleMenu = document.getElementById(toggleButton.getAttribute('data-target').slice(1));

  toggleButton.addEventListener('click', function(){
    toggleMenu.classList[toggleMenu.classList.contains('in') ? 'remove' : 'add']('in');
  });

  /**
   * An element is visible if:
   * - a candidate is above the screen
   * OR
   * - a candidate is below the scren
   *
   * @param el {HTMLElement}
   * @param elements
   */
  function updateElementVisiblityAgainst(el, elements){
    var offsetY = window.scrollY;
    var outerHeight = window.outerHeight;

    var canBeVisible = Array.prototype.every.call(elements, function checkVisibility(candidate){
      return (offsetY >= candidate.offsetTop + candidate.clientHeight) || (offsetY + outerHeight <= candidate.offsetTop);
    });

    if (canBeVisible && !el.classList.contains('visible')) {
      el.classList.add('visible');
    }
    else if (!canBeVisible && el.classList.contains('visible')){
      el.classList.remove('visible')
    }
  }

  // Interactive Content
  each(document.querySelectorAll('p.interactive-loading'), function(el){
      el.style.width = el.getAttribute('data-width') + 'px';
      el.style.height = el.getAttribute('data-height') + 'px';

      var loadElement = function loadElement(e){
          var self = this;
          var img = document.createElement('img');

          self.classList.add('loading');

          img.src = self.getAttribute('data-src');
          img.alt = self.innerHTML;

          img.onload = function(){
              each(self.childNodes, function(n){
                  if (n.nodeType === 3){        //nodeName === #text
                      self.removeChild(n);
                  }
              });

              self.removeAttribute('style');
              self.classList.remove('loading');
              self.classList.add('loaded');
          };

          self.appendChild(img);
          self.removeEventListener('click', loadElement);
      };

      el.addEventListener('click', loadElement);
  });
})(document, window);
