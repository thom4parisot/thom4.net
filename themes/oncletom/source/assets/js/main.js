(function(document, undefined){
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
})(document);
