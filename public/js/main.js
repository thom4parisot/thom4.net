import * as search from './search.js';
import * as pictures from './pictures.js';

document.body.classList.add('js-enabled');

document.addEventListener('DOMContentLoaded', (e) => {
  const {get, render} = pictures;
  const tilesContainer = document.querySelector('.site-blog .photography-tiles > ul');

  if (tilesContainer) {
    get('https://thom4.net/photography/atom.xml')
      .then(items => items.slice(0, 8).map(post => '<li>' + render({post}) + '</li>'))
      .then(items => tilesContainer.innerHTML = items.join(''));
  }
});

document.addEventListener('DOMContentLoaded', (e) => {
  const {get, render} = search;
  const query = new URLSearchParams(window.location.search).get('q');
  const searchForm = document.querySelector('#search [role="search"]');
  const searchField = document.querySelector('#search [name="q"]');
  const searchResults = document.querySelector('#search .search-results');

  if (query && searchField) {
    searchField.value = query;
  }

  // resets results when search field is empty
  if (searchField) {
    searchField.addEventListener('change', () => {
      if (searchField.value.trim() === '') {
        searchResults.innerHTML = '';
      }
    });
  }

  const displayResults = (results) => {
    const parser = new DOMParser();
    searchResults.innerHTML = '';

    results.forEach(post => {
      const html = parser.parseFromString(render({post}), 'text/html');
      const li = document.createElement('li');
      // li.lang = post.lang;
      li.innerHTML = html.body.innerHTML;
      searchResults.appendChild(li);
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', () => {
      searchForm.dataset.state = 'loading';
      get(searchField.value)
        .then(displayResults)
        .then(() => {
          searchForm.dataset.state = 'idle';
        });
    });
  }

  if (query) {
    get(query).then(displayResults);
  }
});
