import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <header className="bg-white shadow">
            <div className="container relative mx-auto flex items-center justify-between px-6 py-4 sm:px-10 md:px-14 lg:px-24">
                <Link href="/" className="font-bold text-orange-500">
                    <span className="text-green-500">Handaan </span>Express
                </Link>

                <nav className="absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-6">
                        <li>
                            <a
                                href="#"
                                className="rounded-full bg-green-100 px-4 py-2 text-green-600 hover:text-green-700"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                Orders
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-5 text-slate-900">
                    <button
                        type="button"
                        aria-label="Cart"
                        className="inline-flex h-6 w-6 items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-5 w-5"
                        >
                            <circle cx="9" cy="20" r="1.4" />
                            <circle cx="18" cy="20" r="1.4" />
                            <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.5a1 1 0 0 0 1-.8L20 7H7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Profile"
                        className="inline-flex h-6 w-6 items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-5 w-5"
                        >
                            <circle cx="12" cy="8" r="3" />
                            <path d="M6 19c1.3-2.6 3.3-4 6-4s4.7 1.4 6 4" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
