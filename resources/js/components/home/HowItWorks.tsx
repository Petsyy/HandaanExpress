import type { ReactNode } from "react";
import { Clock3, ShoppingBag, Truck } from "lucide-react";

type Step = {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
};

const steps: Step[] = [
    {
        id: "choose-bilao",
        title: "Choose Your Bilao",
        description: "Browse our menu and pick your favorites",
        icon: <ShoppingBag className="h-6 w-6" aria-hidden="true" />,
    },
    {
        id: "schedule-delivery",
        title: "Schedule Delivery",
        description: "Pick a date and time that works for you",
        icon: <Clock3 className="h-6 w-6" aria-hidden="true" />,
    },
    {
        id: "we-deliver",
        title: "We Deliver!",
        description: "Fresh bilao delivered right to your doorstep",
        icon: <Truck className="h-6 w-6" aria-hidden="true" />,
    },
];

export default function HowItWorksSection() {
    return (
        <section className="bg-[#f1f3f2] py-16 md:py-20">
            <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-24">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-2 text-base text-slate-500 md:text-lg">
                        Three easy steps to your perfect handaan
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {steps.map((step) => (
                        <article
                            key={step.id}
                            className="rounded-3xl bg-white/80 p-10 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                        >
                            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-800 md:text-[2rem]">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-base text-slate-500 md:text-lg">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
