import { Head } from "@inertiajs/react";
import MenuCard from "../components/menu/MenuContent";
import Layout from "../components/Layout";

export default function MenuPage() {
    return (
        <Layout>
            <Head title="Menu" />
            <MenuCard />
        </Layout>
    );
}
