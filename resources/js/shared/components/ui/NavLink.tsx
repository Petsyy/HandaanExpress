import { Link, usePage } from "@inertiajs/react";

export default function NavLink({ href, children, }: { href: string; children: React.ReactNode; }) {
    const { url } = usePage();
    const isActive = (path: string) => {
        if (path === "/") {
            return url === "/";
        }
        return url.startsWith(path);
    };

    return (
        <Link
            href={href}
            className={`text-base font-medium text-gray-700 hover:text-gray-900${isActive(href)
                    ? "bg-green-100 text-green-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
        >
            {children}
        </Link>
    );
}
