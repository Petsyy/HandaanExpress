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

export interface Category {
    id: string;
    name: string;
}
