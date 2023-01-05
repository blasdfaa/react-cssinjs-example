const BANNERS = [
  {
    size: 'large',
    title: 'Трековые велики',
    discount: '50%',
    image: '/images/banners/1.jpg',
    imageAlt: 'Чёрный трековый велик на фоне серой стены',
  },
  {
    size: 'medium',
    title: 'Цветные покрышки',
    image: '/images/banners/2.jpg',
    imageAlt: 'Красная покрышка на фоне голубой стены',
  },
  {
    size: 'medium',
    title: 'Стильные велики',
    image: '/images/banners/3.jpg',
    imageAlt: 'Голубой прогулочный велик на фоне красной стены',
  },
];

const CATEGORIES = [
  {
    name: 'Прогулочные',
    amount: '189 моделей',
    image: '/images/categories/1.jpg',
    imageAlt: 'Красный прогулочный велик',
  },
  {
    name: 'Трековые',
    amount: '156 моделей',
    image: '/images/categories/2.jpg',
    imageAlt: 'Белый трековый велик',
  },
  {
    name: 'Горные',
    amount: '125 моделей',
    image: '/images/categories/3.jpg',
    imageAlt: 'Серый горный велик',
  },
];

const NEWS = [
  {
    title: 'Велопробег в Москве',
    date: '02.04.2022',
    image: '/images/news/1.jpg',
    imageAlt: 'Велосипедисты едут по дороге',
  },
  {
    title: 'Зимний велик',
    date: '21.01.2022',
    image: '/images/news/2.jpg',
    imageAlt: 'Велик в сугробе на фоне гор',
  },
  {
    title: 'В длинную дорогу',
    date: '17.10.2021',
    image: '/images/news/3.jpg',
    imageAlt: 'Велик в поле на закате',
  },
];

const PRODUCTS = [
  {
    name: 'Велик BMC',
    price: '94 000 ₽',
    image: '/images/products/1.jpg',
    imageAlt: 'Серый велик с чёрными ободами',
    hit: true,
    novelty: false,
    discount: false,
    unavailable: false,
  },
  {
    name: 'Велик Mongoose',
    price: '35 000 ₽',
    image: '/images/products/2.jpg',
    imageAlt: 'Синий велик с белыми ободами',
    hit: false,
    novelty: false,
    discount: true,
    unavailable: false,
  },
  {
    name: 'Велик Peugeot',
    price: '58 000 ₽',
    image: '/images/products/3.jpg',
    imageAlt: 'Белый велик с чёрными ободами',
    hit: true,
    novelty: true,
    discount: false,
    unavailable: false,
  },
  {
    name: 'Велик Trek',
    price: '76 000 ₽',
    image: '/images/products/4.jpg',
    imageAlt: 'Белый велик с чёрными ободами',
    hit: false,
    novelty: false,
    discount: false,
    unavailable: true,
  },
  {
    name: 'Велик Triban',
    price: '116 000 ₽',
    image: '/images/products/5.jpg',
    imageAlt: 'Серый велик с чёрными ободами',
    hit: true,
    novelty: true,
    discount: false,
    unavailable: false,
  },
  {
    name: 'Велик Norco',
    price: '62 000 ₽',
    image: '/images/products/6.jpg',
    imageAlt: 'Коричневый велик с синими ободами',
    hit: false,
    novelty: true,
    discount: false,
    unavailable: true,
  },
];

const useMocks = () => {
  return { banners: BANNERS, categories: CATEGORIES, news: NEWS, products: PRODUCTS };
};

export default useMocks;
