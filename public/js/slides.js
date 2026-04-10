import Reveal from 'reveal.js';
global.Reveal = Reveal;

import RandomColors from 'reveal-random-colors';
import RevealMarkdown from '../../vendor/markdown/markdown.js';

const $$ = (selector) => {
  return Array.from(document.querySelectorAll(selector));
};

Reveal.registerPlugin('randomColors', RandomColors());
Reveal.registerPlugin('markdown', RevealMarkdown);

Reveal.initialize({
  width: 1024,
  height: 728,

  controls: /(localhost|#live)/.test(location.href) !== true,
  progress: true,
  history: true,
  center: true,
  overview: false,
  rollingLinks: false,

  transition: 'linear'
});

Reveal.addEventListener('ready', function() {
  window.localStorage.setItem('reveal-speaker-layout', 'tall')

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = window.location.search.match( /print-pdf/gi ) ? '/talks/styles/slides/print-pdf.css' : '/talks/styles/slides/print-paper.css';
  $$('head')[0].appendChild(link)

  $$('a > img').forEach(function(el){
    el.parentNode.classList.add('image');
  });

  $$('section[data-background]').forEach(function(el){
    var isEmpty = Array.from(el.children).every(function(child){
      return (typeof child.nodeValue === 'text' && child.nodeValue.trim() === '') || child.classList.contains('notes');
    });

    if (isEmpty){
      el.classList.add('empty');
    }
  });

  $$('section[data-markdown] > h1, section[data-markdown] > h2, section[data-markdown] > h3').forEach(function(el){
    if (el.nextElementSibling && el.nextElementSibling.classList.contains('notes')){
      el.classList.add('last-child');
    }
  });

  $$('section[data-markdown]').forEach(function(section){
    if (section.querySelectorAll('pre > code').length){
      section.setAttribute('data-state', 'code');
    }
  });
})

Reveal.addEventListener('pdf-ready', function() {
  $$('.pdf-page').forEach(el => {
    el.style.minHeight = el.style.height
    el.style.height = ""

    const speakerNotes = el.querySelector('.speaker-notes')
    if (speakerNotes) {
      speakerNotes.style.marginTop = el.style.minHeight
    }
  })
});
