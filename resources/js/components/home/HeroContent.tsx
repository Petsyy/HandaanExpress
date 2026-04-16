import HeroActions from "./HeroActions";

type HeroContentProps = {
    title: string;
    highlightedWord: string;
    description: string;
};

export default function HeroContent({
    title,
    highlightedWord,
    description,
}: HeroContentProps) {
    return (
        <div className="max-w-lg space-y-5 md:space-y-6">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
                {title}
                <span className="block text-orange-500">{highlightedWord}</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/90 md:text-2xl">
                {description}
            </p>
            <HeroActions />
        </div>
    );
}
