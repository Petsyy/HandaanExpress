<?php

namespace App\Services\Customer;
use Illuminate\Support\Facades\DB;
use App\Models\Cart;
use Illuminate\Support\Str;
use App\Models\Order;

class CheckoutService
{
    public function checkout(int $userId, array $data)
    {
        return DB::transaction(function () use ($userId, $data) {
            $cart = Cart::with('items.variant.product')
                ->where('user_id', $userId)
                ->firstOrFail();

            $subtotal = $cart->items->sum('subtotal');

            $order = Order::create([
                'user_id' => $userId,
                'order_number' => 'ORD-' . strtoupper(Str::random(8)),
                'status' => 'pending',
                'payment_method' => $data['payment_method'],
                'payment_status' => 'pending',
                'subtotal' => $subtotal,
                'total' => $subtotal,
                'notes' => $data['notes'] ?? null,
                'pickup_date' => $data['pickup_date'] ?? null,
                'pickup_time' => $data['pickup_time'] ?? null,
                'placed_at' => now(),
            ]);

            foreach ($cart->items as $item) {
                $order->items()->create([
                    'product_id' => $item->product_id,
                    'variant_id' => $item->variant_id,
                    'product_name' => $item->variant->product->name,
                    'variant_name' => $item->variant->name,
                    'quantity' => $item->quantity,
                    'unit_price' => $item->unit_price,
                    'subtotal' => $item->subtotal,
                ]);
            }

            $cart->items()->delete();

            return $order->load('items');
        });
    }
}