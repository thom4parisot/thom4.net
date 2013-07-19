(function(document, context, undefined){
  var tag = document.querySelector("link[rel='canonical']");
  
  context.disqus_shortname = tag.getAttribute("data-disqus-shortname");
  context.disqus_url = tag.getAttribute("href");

  if (document.getElementById("disqus_thread")){ 
    var dsq = document.createElement('script');
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
  
  var onScroll = (function(tag){
    if (!document.querySelector){
      return function(){};
    }

    var el = document.querySelector(tag);
    var origOffsetY = el.offsetTop;

    return function onScroll(e) {
      window.scrollY >= origOffsetY ? el.classList.add('sticky') :
        el.classList.remove('sticky');
    };
  })('aside');

  var toggleCollapse = function(){
    var target = document.querySelector(this.dataset.target || '.nav-collapse');

    target.classList && target.classList.toggle('in');
  };

  if (document.querySelector && document.addEventListener){
    document.addEventListener('scroll', onScroll);
    document.querySelector('#services [data-toggle="collapse"]').addEventListener('click', toggleCollapse);
  }
})(document, window);
