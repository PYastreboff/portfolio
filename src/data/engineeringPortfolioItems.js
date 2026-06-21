import { f22FanpagePortfolioItem } from './f22Fanpage';

export const portfolioItems = [
  {
    slug: '3d-printing',
    categories: ['category-print', 'category-proto'],
    image: '/img/bambu-cover.png',
    alt: 'Bambu Lab — 3D printing',
    title: 'CAD & Prototyping',
    categoryLabel: '3D Printing',
  },
  {
    slug: 'f22-cad',
    categories: ['category-cad', 'category-aero'],
    image: '/img/f22-cad-cover.png',
    alt: 'F-22 Raptor CAD project cover',
    title: 'F-22 Raptor CAD Model',
    categoryLabel: 'CAD & Aerospace',
  },
  {
    ...f22FanpagePortfolioItem,
    categories: ['category-cad', 'category-aero'],
    categoryLabel: 'CAD & Aerospace',
  },
  {
    slug: 'aerosoc-eng',
    categories: ['category-aero', 'category-proto'],
    image: '/img/aerosoc.png',
    alt: 'UNSW AeroSoc',
    title: 'UNSW AeroSoc Projects',
    categoryLabel: 'Aerospace',
  },
  {
    slug: 'solar-car',
    categories: ['category-proto', 'category-aero', 'category-print'],
    image: '/img/solar-car-unsw-cover.png',
    alt: 'UNSW Sydney — solar car capstone project',
    title: 'UNSW Solar Car — DESN1K Capstone',
    categoryLabel: 'Capstone, Prototyping & 3D Printing',
  },
  {
    slug: 'spx-soccer-robot',
    categories: ['category-proto'],
    image: '/img/spx-logo.png',
    alt: 'St. Pius X College logo',
    title: 'St Pius X Robotics Coach',
    categoryLabel: 'Robotics & Prototyping',
  },
];
