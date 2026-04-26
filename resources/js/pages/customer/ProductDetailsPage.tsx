import { Head } from "@inertiajs/react";
import Layout from "@/layouts/customer/CustomerLayout";
import { ProductDetails } from "@/features/customer/product";
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
