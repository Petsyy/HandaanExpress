import { Head } from "@inertiajs/react";
import Layout from "@/shared/components/layout/CustomerLayout";
import { MenuContent } from "@/features/menu";

export default function MenuPage() {
    return (
        <Layout>
            <Head title="Menu" />
            <MenuContent />
        </Layout>
    );
}
