
import Macbook from '../assets/Macbook Air.jpg';
import AirPods from '../assets/Apple AirPods Pro.jpg';
import Watch from '../assets/Watch.png';
import ApplePhone from '../assets/Apple iPhone 14 Pro.jpg';
import iphone15 from '../assets/Apple iPhone 15.jpg';
import AirPodsPro from '../assets/AirPods Max Silver.jpg';
import HomePod from '../assets/Apple HomePod.jpg';
import Ipad from '../assets/Apple iPad 9.jpg';
import Ipad11 from '../assets/Apple iPad Pro 11.jpg';
import Keyboard from '../assets/Apple Magic Keyboard.jpg';
import IphoneImg from '../assets/iphone 16e.jpg';
import ipadImg from '../assets/AppleiPadAir.png';
import WatchImg from '../assets/AppleWatch.jpg';
import macbookImg from '../assets/Mac Pro.png';
import iphone12 from '../assets/Apple-iPhone-12-Pro.png';
import earpods from '../assets/earpods.png';
import Awatch from '../assets/Awatch.png';
import iphone13pro from '../assets/iphone13.png';



export const products = [
{
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 900,
    src: ApplePhone,
    tags: ["new", "bestseller"],
  },
  {
    id: 2,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: 399,
    src: Watch,
    tags: ["new"],
  },
  {
    id: 3,
    name: "AirPods Max Silver",
    price: 549,
    src: AirPodsPro,
    tags: ["bestseller", "featured"],
  },
  {
    id: 4,
    name: "Apple iPad 9 10.2\" 64GB Wi-Fi Silver",
    price: 398,
    src: Ipad,
    tags: ["featured"],
  },
  {
    id: 5,
    name: "Apple MacBook Air 13\" M2 Chip 256GB Midnight",
    price: 1099,
    src: Macbook,
    tags: ["new", "featured"],
  },
  {
    id: 6,
    name: "Apple iPhone 15 128GB Blue",
    price: 799,
    src: iphone15,
    tags: ["bestseller"],
  },
  {
    id: 7,
    name: "Apple iPad Pro 11\" M4 Chip 256GB Space Black",
    price: 999,
    src: Ipad11,
    tags: ["featured"],
  },
  {
    id: 8,
    name: "Apple AirPods Pro (2nd generation) with MagSafe Case",
    price: 249,
    src: AirPods,
    tags: ["new"],
  },
  {
    id: 9,
    name: "Apple HomePod (2nd generation) Midnight",
    price: 299,
    src: HomePod,
    tags: ["bestseller"],
  },
  {
    id: 10,
    name: "Apple Magic Keyboard for iPad Pro 11\" (2nd generation) White",
    price: 299,
    src: Keyboard,
    tags: ["featured"],
  },

  ];

  export const showcaseProducts = [
  {
    src: IphoneImg,
    alt: "I phone 16e",
    title: "Popular Products",
    description:
      "iPhone 16e features a stunning display, powerful performance, advanced camera system, and the seamless experience you expect from Apple.",
    dark: false,
  },
  {
    src: ipadImg,
    alt: "iPad Pro",
    title: "IPad Pro",
    description:
      "iPad Air combines a brilliant Liquid Retina display, blazing-fast performance with the M-series chip, and the versatility to handle everything from creativity to productivity with ease.",
    dark: false,
  },
  {
    src: WatchImg,
    alt: "Apple Watch",
    title: "Apple Watch",
    description:
      "Apple Watch combines a sleek design, powerful health and fitness tracking, seamless connectivity, and the convenience of having everything you need right on your wrist.",
    dark: false,
  },
  {
    src: macbookImg,
    alt: "Macbook Pro",
    title: "Macbook Pro",
    description:
      "MacBook combines a stunning Retina display, exceptional performance with Apple silicon, all-day battery life, and a thin, lightweight design built for productivity anywhere.",
    dark: true,
  },
  ];


  export const discountProducts = [
  {
    id: 1,
    name: "Apple iPhone 12 Pro 512GB Gold (MQ233)",
    price: 1437,
    image: iphone12,
  },
  {
    id: 2,
    name: "AirPods Silver",
    price: 549,
    image: earpods,
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
    image: Awatch,
  },
  {
    id: 4,
    name: "Apple iPhone 13 Pro 1TB Gold (MQ2V3)",
    price: 1499,
    image: iphone13pro,
  },
];