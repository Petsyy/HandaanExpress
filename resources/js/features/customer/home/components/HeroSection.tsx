import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function HeroSection() {
    const heroImg = "/images/hero/hero-food.jpg";
    const heroTitle = "Celebrate Every Occasion";
    const highlightedWord = "Hassle-Free";
    const heroDescription =
        "Perfect for birthdays, fiestas, and family gatherings - freshly prepared and delivered right to your doorstep.";

    return (
        <section className="relative min-h-[78vh] overflow-hidden">
            <HeroBackground
                imageSrc={heroImg}
                imageAlt="Filipino party food spread"
            />
            <div className="container relative mx-auto flex min-h-[78vh] items-center justify-start px-6 py-14 sm:px-10 md:px-14 md:py-16 lg:px-24">
                <HeroContent
                    title={heroTitle}
                    highlightedWord={highlightedWord}
                    description={heroDescription}
                />
            </div>
        </section>
    );
}
