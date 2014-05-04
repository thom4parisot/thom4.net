(function(document, context){
  var tag = document.querySelector("link[rel='canonical']");
  var each = (function(){
      var slice = Array.prototype.slice;

      return function(data, callback){
          return slice.call(data).map(callback);
      };
  })();

  context.disqus_shortname = tag.getAttribute("data-disqus-shortname");
  context.disqus_url = tag.getAttribute("href");

  document.addEventerListener('load', function(){
    try {
      Typekit.load();
    }
    catch(e){};
  });

  document.addEventListener('load', function(){
    if (document.getElementById("disqus_thread")){
      var dsq = document.createElement('script');
      dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('body')[0]).appendChild(dsq);
    }
  });

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
