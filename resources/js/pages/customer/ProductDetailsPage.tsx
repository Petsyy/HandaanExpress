import { Head } from "@inertiajs/react";
import Layout from "@/shared/components/layout/CustomerLayout";
import { ProductDetails } from "@/features/product";
import type { Product } from "@/shared/types/models";
import { usePage } from "@inertiajs/react";

type ProductDetailsPageProps = {
    product: Product;
};

export default function ProductDetailsPage() {
    const { product } = usePage<ProductDetailsPageProps>().props;
    return (
        <Layout>
            <Head title="Product Details" />
            <ProductDetails product={product} />
        </Layout>
    );
}
