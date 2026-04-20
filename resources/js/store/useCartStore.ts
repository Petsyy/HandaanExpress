import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    productId: string;
    name: string;
    image: string;
    size: string;
    price: number;
    quantity: number;
    addOns: { label: string; price: number }[];
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (index: number) => void;
    updateQuantity: (index: number, quantity: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    subtotal: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item) =>
                set((state) => ({
                    items: [...state.items, item],
                })),

            removeItem: (index) =>
                set((state) => ({
                    items: state.items.filter((_, i) => i !== index),
                })),

            updateQuantity: (index, quantity) => {
                if (quantity < 1) return;
                set((state) => ({
                    items: state.items.map((item, i) =>
                        i === index ? { ...item, quantity } : item
                    ),
                }));
            },

            clearCart: () => set({ items: [] }),

            totalItems: () => {
                return get().items.reduce((sum, item) => sum + item.quantity, 0);
            },

            subtotal: () => {
                return get().items.reduce(
                    (sum, item) =>
                        sum +
                        (item.price +
                            item.addOns.reduce((a, o) => a + o.price, 0)) *
                        item.quantity,
                    0
                );
            },
        }),
        {
            name: "handaan-express-cart",
        }
    )
);
