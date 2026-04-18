import { Link } from "@inertiajs/react";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/shared/types/models";
import Button from "@/shared/components/ui/Button";

type ProductCardProps = {
    product: Product;
    onAdd?: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: ProductCardProps) {
    const productHref = `/product/${product.id}`;

    const handleAdd = () => {
        onAdd?.(product);
    };

    return (
        <article className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <Link href={productHref} className="group block">
                <div className="aspect-square overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </Link>

            <div className="space-y-2 p-4">
                <Link href={productHref} className="block">
                    <h3 className="line-clamp-2 text-sm leading-tight font-semibold text-slate-900">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                    <span className="font-medium text-slate-900">
                        {product.rating.toFixed(1)}
                    </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-orange-600">
                        PHP {product.price.toLocaleString()}
                    </span>

                    {onAdd ? (
                        <Button
                            type="button"
                            onClick={handleAdd}
                            size="sm"
                            className="h-8 rounded-xl bg-orange-500 px-3 text-xs text-white hover:bg-orange-600"
                        >
                            <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                            Add
                        </Button>
                    ) : (
                        <Link
                            href={productHref}
                            className="flex items-center h-8 rounded-xl bg-orange-500 px-3 text-xs text-white hover:bg-orange-600"
                        >
                            <ShoppingCart className="mr-1 h-3.5 w-3.5" />
                            Add
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
}
