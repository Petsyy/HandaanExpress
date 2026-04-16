import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../components/layouts/Navbar";
import HeroSection from "../components/home/HeroSection";
import ProductSection from "../components/home/ProductSection";
import HowItWorks from "../components/home/HowItWorks";

export default function LandingPage() {
    return (
        <>
            <Head title="HandaanExpress" />
            <Navbar />
            <HeroSection />
            <ProductSection />
            <HowItWorks />
        </>
    );
}
