import { Head } from "@inertiajs/react";
import Layout from "@/layouts/customer/CustomerLayout";
import OrderDetails from "@/features/customer/order/OrderDetails";


export default function OrderPage() {
    return (
        <Layout>
            <Head title="Order" />
            <OrderDetails />
        </Layout>
    )
}