import Button from "@/shared/components/ui/Button";

export default function HeroActions() {
    return (
        <div className="flex flex-wrap gap-3 pt-1">
            <Button href="/menu" variant="primary" size="lg">
                Browse Menu
                <span aria-hidden="true">→</span>
            </Button>
            <Button href="/login" variant="secondary" size="lg">
                Sign In
            </Button>
        </div>
    );
}
