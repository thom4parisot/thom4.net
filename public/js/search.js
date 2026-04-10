import '../algolia/algoliasearchLite.min.js';
import {search as render} from './templates.bundle.js';

const searchForm = document.querySelector('form[role="search"]');
const algoliaConfig = document.querySelector('meta[property="algolia:search"]').dataset;
const searchField = document.querySelector('form[role="search"] [name="q"]');
const resultsContainer = document.querySelector('.content-results');
const index = algoliasearch(algoliaConfig.applicationId, algoliaConfig.apiKey)
  .initIndex(algoliaConfig.indexName);

export {render};
export const get = (query) => {
  return index.search(query, { hitsPerPage: 6 }).then(({hits}) => hits);
};

if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (searchField.value) {
      window.history.pushState({}, "", `?q=${searchField.value}#search`)
    }
    else {
      window.location = '#search';
    }
  });
}
