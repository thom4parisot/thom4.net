'use strict';

const urlFor = hexo.extend.helper.store['url_for'].bind(hexo);

hexo.extend.helper.register('coverUrl', (post, config) => {
  const { default_cover, url:siteUrl } = config;
  var url = post.cover ? (post.cover.url || post.cover) : '';

  if (!url && default_cover) {
    url = default_cover;
  }

  if (url){
    if (url.match(/^\/images/) && process.env.NODE_ENV === 'production'){
      url = `${siteUrl}${urlFor(url)}`;
    }

    if (url.match(/^\/\//)){
      url = `https:${url}`;
    }

    url = url.replace('_c_d.jpg', '_b_d.jpg');
  }

  return url;
});
