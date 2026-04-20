import { useMemo, useState } from "react";
import { Check, Link, Minus, Plus, Star } from "lucide-react";
import { products } from "@/data/products";
import { usePage, router } from "@inertiajs/react";
import { useCartStore } from "@/store/useCartStore";

type PageProps = {
    productId: string;
};

export default function ProductDetails() {
    const { productId } = usePage<PageProps>().props;
    const addItem = useCartStore((state) => state.addItem);

    const product = products.find(
        (item) => String(item.id) === String(productId),
    );

    if (!product) {
        return <div className="px-6 py-10">Product not found.</div>;
    }

    const defaultSize = product.sizes[0];

    const [selectedSize, setSelectedSize] = useState(defaultSize.label);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
    const [quantity, setQuantity] = useState(1);

    const activeSize = product.sizes.find((size) => size.label === selectedSize) ?? defaultSize;

    const toggleAddOn = (label: string) => {
        setSelectedAddOns((current) =>
            current.includes(label)
                ? current.filter((item) => item !== label)
                : [...current, label],
        );
    };

    const addOnsTotal = useMemo(() => {
        return (
            product.addOns?.reduce((total, addOn) => {
                return selectedAddOns.includes(addOn.label)
                    ? total + addOn.price
                    : total;
            }, 0) ?? 0
        );
    }, [product.addOns, selectedAddOns]);

    const unitPrice = activeSize.price + addOnsTotal;
    const totalPrice = unitPrice * quantity;

    const formatPeso = (value: number) => `₱${value.toLocaleString()}`;

    const increaseQuantity = () => setQuantity((current) => current + 1);
    const decreaseQuantity = () => setQuantity((current) => (current > 1 ? current - 1 : 1));

    const handleAddToCart = () => {
        if (!product) return;

        addItem({
            productId: String(product.id),
            name: product.name,
            image: product.image,
            size: selectedSize,
            price: activeSize.price,
            quantity: quantity,
            addOns: product.addOns
                ?.filter((addOn) => selectedAddOns.includes(addOn.label))
                .map((addOn) => ({ label: addOn.label, price: addOn.price })) ?? [],
        });

        router.visit("/cart");
    };

    return (
        <section className="px-6 py-10 sm:px-10 md:px-14 lg:px-24">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_1fr]">
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200">
                    {/* back button */}
                    <Link
                        href="/"
                        className="absolute left-4 top-4 rounded-full bg-white p-2 text-gray-700 shadow hover:bg-gray-100"
                    ></Link>
                    <div className="aspect-square">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    {/* Back button */}
                    <button
                        onClick={() => window.history.back()}
                        className="mb-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                        ← Back
                    </button>

                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {product.name}
                    </h1>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                        <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                        <span className="font-medium text-gray-900">
                            {product.rating}
                        </span>
                        <span>•</span>
                        <span>{product.category ?? "Spaghetti"}</span>
                    </div>

                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
                        {product.description}
                    </p>

                    {/* Size */}
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Size
                        </h2>

                        <div className="mt-4 flex flex-wrap gap-3">
                            {product.sizes.map((size) => {
                                const isSelected = selectedSize === size.label;

                                return (
                                    <button
                                        key={size.label}
                                        type="button"
                                        onClick={() =>
                                            setSelectedSize(size.label)
                                        }
                                        className={`rounded-full border px-5 py-3 text-sm font-medium transition ${isSelected
                                            ? "border-green-500 bg-green-50 text-green-700"
                                            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                                            }`}
                                    >
                                        {size.label} — {formatPeso(size.price)}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Add-ons */}
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Add-ons
                        </h2>

                        <div className="mt-4 space-y-3">
                            {product.addOns?.map((addOn) => {
                                const isSelected = selectedAddOns.includes(
                                    addOn.label,
                                );

                                return (
                                    <label
                                        key={addOn.label}
                                        className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-4 transition ${isSelected
                                            ? "border-gray-300 bg-white"
                                            : "border-gray-300 bg-white hover:border-gray-400"
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() =>
                                                toggleAddOn(addOn.label)
                                            }
                                            className="sr-only"
                                        />

                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`flex h-5 w-5 items-center justify-center rounded-full border ${isSelected
                                                    ? "border-green-500 bg-green-500"
                                                    : "border-green-500 bg-white"
                                                    }`}
                                            >
                                                {isSelected && (
                                                    <Check className="h-3 w-3 text-white" />
                                                )}
                                            </div>

                                            <span className="text-base font-medium text-gray-800">
                                                {addOn.label}
                                            </span>
                                        </div>

                                        <span className="text-base text-gray-500">
                                            +{formatPeso(addOn.price)}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mt-8 flex items-center gap-4">
                        <span className="text-lg font-semibold text-gray-900">
                            Quantity
                        </span>

                        <div className="flex items-center overflow-hidden rounded-full border border-gray-300 bg-white">
                            <button
                                type="button"
                                onClick={decreaseQuantity}
                                className="px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                            >
                                <Minus className="h-4 w-4" />
                            </button>

                            <span className="min-w-12 text-center text-base font-medium text-gray-900">
                                {quantity}
                            </span>

                            <button
                                type="button"
                                onClick={increaseQuantity}
                                className="px-4 py-2 text-gray-700 transition hover:bg-gray-100"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
                        >
                            Add to Cart — {formatPeso(totalPrice)}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
