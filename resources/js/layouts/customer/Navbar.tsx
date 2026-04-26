import { Link } from "@inertiajs/react";
import { ShoppingCart, User } from "lucide-react";
import NavLink from "@/shared/components/ui/NavLink";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
    const items = useCartStore((state) => state.items);

    const totalItems = items.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 px-6 py-4 sm:gap-6 sm:px-10 md:px-14 lg:px-24">
                <Link
                    href="/"
                    className="justify-self-start font-bold text-orange-500"
                >
                    <span className="text-green-500">Handaan </span>Express
                </Link>

                <nav className="justify-self-center">
                    <ul className="flex items-center gap-4 sm:gap-6">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink href="/order">Orders</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center justify-self-end gap-5 text-slate-900">
                    <Link href="/cart" className="relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -top-2 -right-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                            {totalItems}
                        </span>
                    </Link>
                    <Link href="/profile">
                        <User className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
