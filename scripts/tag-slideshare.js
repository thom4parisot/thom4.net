hexo.extend.tag.register('slideshare', function(args){
  var data = {
    "id": args[0] || '',
    "width": args[1] || 427,
    "height": args[2] || 356
  };

  return '<iframe class="video-container" src="//slideshare.net/slideshow/embed_code/'+data.id+'" height="'+data.height+'" width="'+data.width+'" frameborder="0"></iframe>';
});