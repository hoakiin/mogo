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