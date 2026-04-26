// c:\Users\peter\Herd\HandaanExpress\resources\js\features\cart\Cart.tsx

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import Button from "@/shared/components/ui/Button"
import { Link } from "@inertiajs/react"
import { useCartStore } from "@/store/useCartStore"

export default function Cart() {
    const { items, removeItem, updateQuantity } = useCartStore();
    const subtotal = useCartStore((state) => state.subtotal());
    const deliveryFee = 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Cart</h1>

            {items.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                    <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground/40" />
                    <p className="text-muted-foreground">Your cart is empty</p>
                    <Button className="rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/menu">Browse Menu</Link>
                    </Button>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-4 bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
                                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-2xl object-cover" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                                            {item.addOns.length > 0 && (
                                                <p className="text-xs text-slate-500 mt-1">
                                                    + {item.addOns.map((a) => a.label).join(", ")}
                                                </p>
                                            )}
                                        </div>
                                        <span className="font-bold text-slate-900">
                                            ₱{((item.price + item.addOns.reduce((s, a) => s + a.price, 0)) * item.quantity).toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl">

                                            <Button 
                                                variant="ghost" 
                                                size="icon"
                                                className="h-8 w-8 rounded-lg bg-white shadow-sm hover:bg-slate-100 text-slate-600" 
                                                onClick={() => updateQuantity(index, item.quantity - 1)}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="font-bold w-10 text-center text-sm">{item.quantity}</span>
                                            <Button 
                                                variant="ghost" 
                                                size="icon"
                                                className="h-8 w-8 rounded-lg bg-white shadow-sm hover:bg-slate-100 text-slate-600" 
                                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        
                                        <Button 
                                            variant="ghost" 
                                            size="icon"
                                            className="h-9 w-9 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 transition-colors" 
                                            onClick={() => removeItem(index)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-4">
                        <div className="flex justify-between text-slate-600">
                            <span>Subtotal</span>
                            <span className="font-medium text-slate-900">₱{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>Delivery Fee</span>
                            <span className="font-medium text-slate-900">₱{deliveryFee}</span>
                        </div>
                        <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                            <span className="text-lg font-bold text-slate-900">Total</span>
                            <span className="text-2xl font-black text-orange-600">₱{total.toLocaleString()}</span>
                        </div>
                        <Button className="w-full h-14 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold shadow-lg shadow-orange-200 mt-4 transition-all active:scale-[0.98]">
                            <Link href="/checkout" className="w-full h-full flex items-center justify-center">
                                Proceed to Checkout
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
