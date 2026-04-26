
import { CheckCircle2, Clock, Package } from "lucide-react";

interface OrderItem {
    name: string;
    size: string;
}

interface Order {
    id: string;
    date: string;
    status: 'Delivered' | 'Preparing' | 'Pending';
    items: OrderItem[];
    total: number;
}

const mockOrders: Order[] = [
    {
        id: "ORD-001",
        date: "April 12, 2026",
        status: "Delivered",
        items: [
            { name: "Pancit Canton Bilao", size: "Large" },
            { name: "Filipino Spaghetti Bilao", size: "Medium" },
        ],
        total: 2050,
    },
    {
        id: "ORD-002",
        date: "April 14, 2026",
        status: "Preparing",
        items: [
            { name: "Party Package A", size: "20 pax" },
        ],
        total: 3500,
    },
    {
        id: "ORD-003",
        date: "April 18, 2026",
        status: "Pending",
        items: [
            { name: "Palabok Bilao", size: "Small" },
            { name: "Pancit Bihon Bilao", size: "Small" },
        ],
        total: 1000,
    },
];

const StatusBadge = ({ status }: { status: Order['status'] }) => {
    const configs = {
        Delivered: {
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            icon: <CheckCircle2 className="w-4 h-4" />,
        },
        Preparing: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            icon: <Package className="w-4 h-4" />,
        },
        Pending: {
            bg: "bg-amber-50",
            text: "text-amber-600",
            icon: <Clock className="w-4 h-4" />,
        },
    };

    const config = configs[status];

    return (
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
            {config.icon}
            {status}
        </div>
    );
};

export default function OrderDetails() {
    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 px-2">Order Details</h2>

                <div className="space-y-6">
                    {mockOrders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-[2.5rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex flex-col relative"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                                        {order.id}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {order.date}
                                    </p>
                                </div>
                                <StatusBadge status={order.status} />
                            </div>

                            <div className="mt-4 space-y-1.5">
                                {order.items.map((item, index) => (
                                    <p key={index} className="text-gray-500 font-medium text-[0.95rem] flex items-center gap-2">
                                        <span className="text-gray-400 text-lg">•</span>
                                        {item.name} ({item.size})
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-end">
                                <span className="text-2xl font-bold text-emerald-600">
                                    ₱{order.total.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}