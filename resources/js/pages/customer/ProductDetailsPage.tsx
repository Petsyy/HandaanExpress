import { Head } from "@inertiajs/react";
import Layout from "@/shared/components/layout/CustomerLayout";
import { ProductDetails } from "@/features/product";

export default function ProductDetailsPage() {
    return (
        <Layout>
            <Head title="Product Details" />
            <ProductDetails />
        </Layout>
    );
}
