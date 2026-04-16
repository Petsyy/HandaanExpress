type HeroBackgroundProps = {
    imageSrc: string;
    imageAlt: string;
};

export default function HeroBackground({
    imageSrc,
    imageAlt,
}: HeroBackgroundProps) {
    return (
        <div className="absolute inset-0">
            <img
                src={imageSrc}
                alt={imageAlt}
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/22" />
            <div className="absolute inset-0 bg-linear-to-r from-black/52 via-black/30 to-black/6" />
        </div>
    );
}
