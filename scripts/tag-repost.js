"use strict";

hexo.extend.tag.register('repost', function(args, content){
  var data = {
    "url": args[0] || '',
    "title": Array.prototype.slice.call(args, 1).join(' ') || '',
    "domain": args[0].match(/\/\/([^\/]+)/)[1].replace('www.', '')
  };

  return `<blockquote class="repost">
    <p>
      Ce billet a été initialement publié sur
      <a href="http://${data.domain}" class="domain-link" rel="external">${data.domain}</a>
      sous l'intitulé <a href="${data.url}" class="source-link" rel="external">${data.title}</a>.
    </p>
  </blockquote>`;
});
