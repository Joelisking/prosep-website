import carouselImg1 from '@/public/home/about.png';
import carouselImg2 from '@/public/home/carousel/2.png';
import carouselImg3 from '@/public/home/carousel/3.webp';

export const carouselImages = [
  { src: carouselImg3, alt: 'Hero Image 3' },
  { src: carouselImg1, alt: 'Hero Image 1' },
  { src: carouselImg2, alt: 'Hero Image 2' },
];

// Partners data
import abus from '@/public/home/partners/abus.png';
import albayati from '@/public/home/partners/albayati.png';
import cabot from '@/public/home/partners/cabot.jpg';
import eurogomma from '@/public/home/partners/eurogomma.png';
import hayward from '@/public/home/partners/hayward.png';
import icon from '@/public/home/partners/icon.png';
import minelab from '@/public/home/partners/minelab.png';
import sepor from '@/public/home/partners/sepor.png';
import sepro from '@/public/home/partners/sepro.webp';

export const partnersData = [
  { id: 1, src: abus, alt: 'ABUS' },
  { id: 2, src: albayati, alt: 'Albayati' },
  { id: 3, src: cabot, alt: 'Cabot' },
  { id: 4, src: eurogomma, alt: 'Eurogomma' },
  { id: 5, src: hayward, alt: 'Hayward' },
  { id: 6, src: icon, alt: 'Icon' },
  { id: 7, src: minelab, alt: 'Minelab' },
  { id: 8, src: sepor, alt: 'Sepor' },
  { id: 9, src: sepro, alt: 'Sepro' },
];

export const teamData = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/about/team/1.png',
  },
  {
    name: 'Jane Doe',
    role: 'CTO',
    image: '/about/team/2.png',
  },
  {
    name: 'Jim Doe',
    role: 'CFO',
    image: '/about/team/3.png',
  },
  {
    name: 'Jill Doe',
    role: 'COO',
    image: '/about/team/4.png',
  },
  {
    name: 'Jack Doe',
    role: 'CEO',
    image: '/about/avatar-male.jpg',
  },
  {
    name: 'Jonah Doe',
    role: 'COO',
    image: '/about/avatar-male.jpg',
  },
];
