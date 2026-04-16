import pancitImg from "../assets/images/pancit.jpg";
import spaghettiImg from "../assets/images/spaghetti.jpg";
import palabokImg from "../assets/images/pancit.jpg";
import pancitBihonImg from "../assets/images/pancit-bihon.jpg";
import partyPackageImg from "../assets/images/party-package.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  sizes: { label: string; price: number }[];
  addOns?: { label: string; price: number }[];
  popular?: boolean;
}

export const categories = ["All", "Pancit", "Spaghetti", "Bilao Specials", "Party Packages"];

export const products: Product[] = [
  {
    id: "1",
    name: "Pancit Canton Bilao",
    description: "Classic Filipino stir-fried noodles with vegetables, pork, and shrimp. Perfect for parties and gatherings.",
    price: 450,
    image: pancitImg,
    category: "Pancit",
    rating: 4.8,
    sizes: [
      { label: "Small (4-6 pax)", price: 450 },
      { label: "Medium (8-10 pax)", price: 750 },
      { label: "Large (15-20 pax)", price: 1200 },
    ],
    addOns: [
      { label: "Extra Shrimp", price: 80 },
      { label: "Hard Boiled Eggs", price: 50 },
      { label: "Calamansi Pack", price: 20 },
    ],
    popular: true,
  },
  {
    id: "2",
    name: "Filipino Spaghetti Bilao",
    description: "Sweet-style Filipino spaghetti with hotdog slices, ground meat, and cheese. A kids' party favorite!",
    price: 500,
    image: spaghettiImg,
    category: "Spaghetti",
    rating: 4.7,
    sizes: [
      { label: "Small (4-6 pax)", price: 500 },
      { label: "Medium (8-10 pax)", price: 850 },
      { label: "Large (15-20 pax)", price: 1350 },
    ],
    addOns: [
      { label: "Extra Cheese", price: 60 },
      { label: "Extra Hotdog", price: 50 },
    ],
    popular: true,
  },
  {
    id: "3",
    name: "Palabok Bilao",
    description: "Rich and flavorful rice noodles with shrimp sauce, chicharon, tinapa flakes, and boiled eggs.",
    price: 480,
    image: palabokImg,
    category: "Pancit",
    rating: 4.9,
    sizes: [
      { label: "Small (4-6 pax)", price: 480 },
      { label: "Medium (8-10 pax)", price: 800 },
      { label: "Large (15-20 pax)", price: 1280 },
    ],
    addOns: [
      { label: "Extra Chicharon", price: 40 },
      { label: "Extra Shrimp", price: 80 },
      { label: "Calamansi Pack", price: 20 },
    ],
    popular: true,
  },
  {
    id: "4",
    name: "Pancit Bihon Bilao",
    description: "Light and delicious rice noodles stir-fried with vegetables and tender chicken strips.",
    price: 420,
    image: pancitBihonImg,
    category: "Pancit",
    rating: 4.6,
    sizes: [
      { label: "Small (4-6 pax)", price: 420 },
      { label: "Medium (8-10 pax)", price: 700 },
      { label: "Large (15-20 pax)", price: 1100 },
    ],
    addOns: [
      { label: "Extra Chicken", price: 70 },
      { label: "Calamansi Pack", price: 20 },
    ],
  },
  {
    id: "5",
    name: "Party Package A",
    description: "Complete party package with Pancit Canton, Filipino Spaghetti, Lumpia Shanghai, and Fried Chicken. Good for 20 pax.",
    price: 3500,
    image: partyPackageImg,
    category: "Party Packages",
    rating: 4.9,
    sizes: [
      { label: "20 pax", price: 3500 },
      { label: "30 pax", price: 5000 },
      { label: "50 pax", price: 8000 },
    ],
    addOns: [
      { label: "Extra Rice Bilao", price: 300 },
      { label: "Extra Drinks (1.5L x3)", price: 250 },
      { label: "Dessert Tray", price: 400 },
    ],
    popular: true,
  },
  {
    id: "6",
    name: "Bilao Special Combo",
    description: "Choose any 2 bilao dishes at a special combo price. Perfect for medium-sized gatherings.",
    price: 1400,
    image: pancitImg,
    category: "Bilao Specials",
    rating: 4.7,
    sizes: [
      { label: "2 Small Bilao", price: 1400 },
      { label: "2 Medium Bilao", price: 2200 },
      { label: "2 Large Bilao", price: 3500 },
    ],
    addOns: [
      { label: "Add 3rd Bilao (Small)", price: 400 },
      { label: "Drinks Package", price: 200 },
    ],
  },
];


