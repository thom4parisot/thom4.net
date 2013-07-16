hexo.extend.tag.register('dailymotion', function(args){
  var data = {
    "id": args[0] || '',
    "width": args[1] || 480,
    "height": args[2] || 276
  };

  return '<iframe class="video-container" src="//dailymotion.com/embed/video/'+data.id+'" height="'+data.height+'" width="'+data.width+'" frameborder="0"></iframe>';
});