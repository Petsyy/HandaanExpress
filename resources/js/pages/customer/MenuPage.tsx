import { Head, usePage } from "@inertiajs/react";
import Layout from "@/layouts/customer/CustomerLayout";
import { MenuContent } from "@/features/customer/menu";
import type { Product } from "@/shared/types/models";

type MenuPageProps = {
    products?: Product[];
};

export default function MenuPage() {
    const { products = [] } = usePage<MenuPageProps>().props;

    return (
        <Layout>
            <Head title="Menu" />
            <MenuContent products={products} />
        </Layout>
    );
}
