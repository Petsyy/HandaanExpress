export type Product = {
    id: number;
    name: string;
    image: string;
    price: number;
    rating?: number;
    category?: string;
    description?: string;
    sizes?: {
        label: string;
        price: number;
    }[];
    addOns?: {
        label: string;
        price: number;
    }[];
};

export interface Category {
    id: string;
    name: string;
}
