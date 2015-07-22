'use strict';

hexo.extend.helper.register('coverUrl', function(post, config){
  var url = post.cover ? (post.cover.url || post.cover) : '';

  if (!url && config.default_cover) {
    url = config.default_cover;
  }

  if (url){
    if (url.match(/^\/images/) && process.env.NODE_ENV === 'production'){
      url = config.url + hexo.extend.helper.store['url_for'](url);
    }

    if (url.match(/^\/\//)){
      url = 'https:' + url;
    }

    url = url.replace('_c_d.jpg', '_b_d.jpg');
  }

  return url;
});
