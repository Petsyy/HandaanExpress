import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/features/product/components/ProductCard";
import { Product } from "@/shared/types/models";

type MenuContentProps = {
    products?: Product[];
};

export default function MenuContent({ products = [] }: MenuContentProps) {
    const [category, setCategory] = useState("All");
    const [searchItem, setSearchItem] = useState("");

    const categories = useMemo(() => {
        const uniqueCategories = new Set(products.map((p) => p.category));
        return ["All", ...Array.from(uniqueCategories)];
    }, [products]);

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            category === "All" || product.category === category;
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchItem.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto space-y-8 px-6 py-16 sm:px-10 md:px-14 lg:px-24">
            <div>
                <h2 className="text-2xl font-bold md:text-3xl">Our Menu</h2>
            </div>
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for dishes..."
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className="w-full rounded-md border border-gray-300 pl-9 pr-4 py-2 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                />
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-600">
                    No products available right now.
                </p>
            )}
        </div>
    );
}
