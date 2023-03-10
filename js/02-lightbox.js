import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryMarkup = ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
}

const makeGallery = galleryItems.map(galleryMarkup).join('');

const containerEl = document.querySelector('.gallery');
containerEl.insertAdjacentHTML('beforeend', makeGallery);
console.log(galleryItems);

new SimpleLightbox('.gallery a',
    {
        captionDelay: 250,
        captionsData: 'alt',
        captionPosition: 'bottom',
    });
