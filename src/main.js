import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let page = 1;
const perPage = 9;
let lightbox;

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  const query = e.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
      theme: 'dark',
      backgroundColor: 'red',
    });
    return;
  }

  page = 1;
  clearGallery(galleryContainer);

  try {
    toggleLoader(true);
    const { hits, totalHits } = await fetchImages(query, page, perPage);

    if (!hits.length) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query.',
        position: 'topRight',
        theme: 'dark',
        backgroundColor: 'red',
      });
      return;
    }

    galleryContainer.insertAdjacentHTML('beforeend', renderGallery(hits));
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();

    iziToast.success({
      message: `Found ${totalHits} images!`,
      position: 'topRight',
      theme: 'dark',
    });
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      theme: 'dark',
      backgroundColor: 'red',
    });
  } finally {
    toggleLoader(false);
  }
}

function toggleLoader(isLoading) {
  loader.style.display = isLoading ? 'block' : 'none';
}
