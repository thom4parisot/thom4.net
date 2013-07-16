hexo.extend.tag.register('mindmeister', function(args){
  //@see http://www.mindmeister.com/blog/2010/10/11/embedding-mind-maps/
  var data = {
    "id": args[0] || '',
    "width": args[1] || 600,
    "height": args[2] || 400,
    "zoom": args[3] || 'auto'
  };

  return '<iframe class="video-container" src="//www.mindmeister.com/maps/public_map_shell/'+data.id+
    '?height='+data.height+'&amp;width='+data.width+'&amp;z='+data.zoom+'"'+
    'height="'+data.height+'" width="'+data.width+'" frameborder="0"></iframe>';
});