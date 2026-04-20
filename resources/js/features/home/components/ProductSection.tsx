import type { Product } from "@/shared/types/models";
import { products } from "@/data/products";
import ProductCard from "@/features/product/components/ProductCard";

type ProductSectionProps = {
    items?: Product[];
    title?: string;
    description?: string;
    limit?: number;
    onAddProduct?: (product: Product) => void;
};

export default function ProductSection({
    items,
    title = "Popular Dishes",
    description = "Bestsellers loved by our customers",
    limit = 4,
    onAddProduct,
}: ProductSectionProps) {
    const sourceProducts = items ?? products;
    const popularProducts = sourceProducts.filter((product) => product.popular);
    const displayedProducts =
        popularProducts.length > 0
            ? popularProducts.slice(0, limit)
            : sourceProducts.slice(0, limit);

    return (
        <section className="container mx-auto space-y-8 px-6 py-16 sm:px-10 md:px-14 lg:px-24">
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {displayedProducts.length > 0 ? (
                    displayedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAdd={onAddProduct}
                        />
                    ))
                ) : (
                    <p className="text-sm text-gray-600">
                        No products available right now.
                    </p>
                )}
            </div>
        </section>
    );
}
