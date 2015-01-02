'use strict';

hexo.extend.helper.register('coverUrl', function(post, config){
  var url = '';

  if (post.cover){
    url = post.cover.url || post.cover || '';

    if (url.match(/^\/images/)){
      url = config.url + hexo.extend.helper.store['url_for'](url);
    }

    if (url.match(/^\/\//)){
      url = 'https:' + url;
    }

    url = url.replace('_c_d.jpg', '_b_d.jpg');
  }

  return url;
});