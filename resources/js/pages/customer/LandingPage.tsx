import { Head } from "@inertiajs/react";
import Layout from "@/layouts/customer/CustomerLayout";
import { HeroSection, ProductSection, HowItWorksSection } from "@/features/customer/home";

export default function LandingPage() {
    return (
        <Layout>
            <Head title="HandaanExpress" />
            <HeroSection />
            <ProductSection />
            <HowItWorksSection />
        </Layout>
    );
}
