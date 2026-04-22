import { Head } from "@inertiajs/react";
import Layout from "@/shared/components/layout/CustomerLayout";
import OrderDetails from "@/features/order/OrderDetails";


export default function OrderPage() {
    return (
        <Layout>
            <Head title="Order" />
            <OrderDetails />
        </Layout>
    )
}