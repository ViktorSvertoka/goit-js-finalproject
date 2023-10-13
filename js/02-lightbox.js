import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
  return `
    <li class="gallery__item" id="item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
  `;
}

function createGallery(galleryItems) {
  return galleryItems.map(createGalleryItem).join('');
}

const galleryCardsSet = createGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryCardsSet);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
