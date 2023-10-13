import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}

function selectGalleryEl(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const instance = basicLightbox.create(
    `<img class="gallery__image-big" src="${event.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener('keydown', onKeydownEsc),
      onClose: () => window.removeEventListener('keydown', onKeydownEsc),
    },
  );

  const onKeydownEsc = event => {
    if (event.code === 'Escape') instance.close();
  };

  instance.show();
}

const galleryCardsSet = galleryItems.map(createGalleryItem).join('');

galleryList.insertAdjacentHTML('beforeend', galleryCardsSet);
galleryList.addEventListener('click', selectGalleryEl);
