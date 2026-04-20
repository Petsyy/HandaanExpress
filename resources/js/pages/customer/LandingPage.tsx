import { Head } from "@inertiajs/react";
import Layout from "@/shared/components/layout/CustomerLayout";
import { HeroSection, ProductSection, HowItWorksSection } from "@/features/home";

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
