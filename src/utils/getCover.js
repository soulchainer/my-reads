import { COVER as DEFAULT_COVER } from './constants';

/**
 * @typedef {Object} ImageLinks
 * @property {string|undefined} smallThumbnail URL of the small thumbnail of the current book's cover
 * @property {string|undefined} thumbnail URL of the thumbnail of the current book's cover
 */

/**
 * If it exists, get and return the image cover of the current book.
 * If not, return the default cover image. 
 * @param {ImageLinks|undefined} imageLinks - An object with the thumbnails of the current book
 * @returns {string} The fetched cover image of the current book or the default cover image
 */
const getCover = (imageLinks) => {
  let cover = DEFAULT_COVER;
  if (imageLinks) {
    const {smallThumbnail, thumbnail} = imageLinks; 
    cover = thumbnail ? thumbnail : smallThumbnail;
  }
  return cover;
};

export default getCover;
