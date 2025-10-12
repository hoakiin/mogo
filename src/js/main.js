import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});


const accordionItems = document.querySelectorAll('.accordion-item');

if (accordionItems.length > 0) {
  accordionItems[0].classList.add('open');
}

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', (e) => { 
    if (item.classList.contains('open')) {
      item.classList.remove('open');
    } else {
      accordionItems.forEach((i) => i.classList.remove('open'));
      item.classList.add('open');
    }
  });
});