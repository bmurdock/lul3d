// Reuse the catalog photos and links so the gallery stays in sync with the cards.
const gallery = document.querySelector('.photo-hero');
if (gallery) {
  const cards = [...document.querySelectorAll('.product-card')];
  const initialCard = cards.find(card => card.querySelector('h3').textContent === 'Turtle Sandbox');
  const slides = [initialCard, ...cards.filter(card => card !== initialCard)].filter(Boolean);
  const image = gallery.querySelector('.hero-product-image');
  const imageLink = document.querySelector('#collection-link');
  const nameLink = document.querySelector('#collection-name');
  const count = document.querySelector('#collection-count');
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    const card = slides[current];
    const source = card.querySelector('img');
    image.src = source.getAttribute('src');
    image.alt = source.alt;
    image.width = source.width;
    image.height = source.height;
    imageLink.href = card.querySelector('.product-link').getAttribute('href');
    nameLink.href = imageLink.getAttribute('href');
    nameLink.textContent = card.querySelector('h3').textContent;
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }

  gallery.querySelectorAll('[data-gallery-step]').forEach(button => {
    button.addEventListener('click', () => showSlide(current + Number(button.dataset.galleryStep)));
  });
  gallery.querySelector('.gallery-controls').hidden = false;
}
