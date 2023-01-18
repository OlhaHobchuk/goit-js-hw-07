import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}

const makeGallery = galleryItems.map(galleryMarkup).join('');

const containerEl = document.querySelector('.gallery');
containerEl.insertAdjacentHTML('beforeend', makeGallery);

containerEl.addEventListener('click', onImageClick, {});


function onImageClick(event) {

    if (event.target.nodeName !== "IMG") {
        return
    }
    event.preventDefault();
    const originalImage = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`, {
        onShow: (originalImage) => {
            document.addEventListener('keydown', onEscapeclose)
        },

        onClose: (originalImage) => {
            if (event.code === 'Escape') {
            document.removeEventListener('keydown', onEscapeclose)
            }
        }
    }
    );
	
    originalImage.show();

    function onEscapeclose(event) {
         if (event.code === 'Escape') {
                 originalImage.close();
            }
    }
       
}

console.log(galleryItems);
