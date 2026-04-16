import Button from "../ui/button";

export default function HeroActions() {
    return (
        <div className="flex flex-wrap gap-3 pt-1">
            <Button href="/services" variant="primary" size="lg">
                Start Ordering
                <span aria-hidden="true">→</span>
            </Button>
            <Button href="/services" variant="secondary" size="lg">
                Sign In
            </Button>
        </div>
    );
}
