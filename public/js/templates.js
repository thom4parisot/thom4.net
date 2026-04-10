import {compile} from 'ejs';
import searchResultEjs from '../../../layout/common/search-result.ejs';
import nodebookUpdateEjs from '../../../layout/common/nodebook-update.ejs';
import photographyTileEjs from '../../../layout/photography/tile.ejs';
// import searchResultString from '../../../layout/common/search-result.ejs';

const searchResultTemplate = compile(searchResultEjs, {client: false});
const nodebookUpdateTemplate = compile(nodebookUpdateEjs, {client: false});
const photographyTileTemplate = compile(photographyTileEjs, {client: false});

export const search = (data) => searchResultTemplate(data, {});
export const nodebookUpdate = (data) => nodebookUpdateTemplate(data, {});
export const photography = (data) => photographyTileTemplate(data, {});
