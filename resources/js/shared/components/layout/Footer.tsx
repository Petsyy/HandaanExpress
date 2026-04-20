import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="mt-auto  bg-white">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 sm:px-10 md:grid-cols-3 md:px-14 lg:px-24">
                <div>
                    <h3 className="text-lg font-extrabold">
                        <span className="text-green-500">Handaan</span>
                        <span className="text-orange-500">Express</span>
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                        Your go-to place for bilao dishes and party food. Order
                        easily for birthdays, gatherings, and celebrations.
                    </p>
                </div>

                <div>
                    <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <Link
                            href="/menu"
                            className="transition-colors hover:text-slate-900"
                        >
                            Menu
                        </Link>
                        <Link
                            href="/orders"
                            className="transition-colors hover:text-slate-900"
                        >
                            My Orders
                        </Link>
                        <Link
                            href="/profile"
                            className="transition-colors hover:text-slate-900"
                        >
                            Profile
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="mb-3 text-sm font-semibold">Contact</h4>
                    <div className="flex flex-col gap-2 text-sm text-gray-600">
                        <span>Phone: +63 912 345 6789</span>
                        <span>Email: hello@handaanexpress.ph</span>
                        <span>Location: San Carlos City, Philippines</span>
                    </div>
                </div>
            </div>

            <div className="border-t py-4 text-center text-xs text-gray-500">
                Copyright 2026 HandaanExpress. All rights reserved.
            </div>
        </footer>
    );
}
