"use strict";

var translate = require('hexo/lib/core/i18n');
var i18n = new translate();

i18n.load('languages/', function(){
  hexo.extend.tag.register('repost', function(args, content){
    var __ = i18n.get('fr');
    var data = {
      "url": args[0] || '',
      "title": args[1] || '',
      "domain": args[0].match(/\/\/([^\/]+)/)[1].replace('www.', '')
    };

    function replacer(occurence){
      return occurence.replace(/%([^%]+)%/g, function(m, key){
        return (data[key] && data[key].replace(/(^"|"$)/g, "")) || '';
      });
    }

    var text = __.apply(this, ["repost_tag"].concat([
      '<a href="http://%domain%" class="domain-link" rel="external">%domain%</a>',
      '<a href="%url%" class="source-link" rel="external">%title%</a>'
    ].map(replacer)));

    return '<blockquote class="repost"><p>'+text+'</p></blockquote>';
  });

});
