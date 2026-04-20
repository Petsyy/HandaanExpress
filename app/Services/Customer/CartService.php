<?php

namespace App\Services\Customer;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\ProductVariant;

class CartService
{
    public function getCart(int $userId)
    {
        return Cart::with(['items.variant.product'])
            ->firstOrCreate(['user_id' => $userId]);
    }

    public function addItem(int $userId, array $data): CartItem
    {
        $cart = Cart::firstOrCreate(['user_id' => $userId]);

        $variant = ProductVariant::with('product')->findOrFail($data['variant_id']);

        $unitPrice = $variant->price;
        $subtotal = $unitPrice * $data['quantity'];

        $cartItem = $cart->items()->create([
            'product_id' => $variant->product_id,
            'variant_id' => $variant->id,
            'quantity' => $data['quantity'],
            'unit_price' => $unitPrice,
            'subtotal' => $subtotal,
        ]);

        return $cartItem->load(['variant.product']);
    }

    public function updateItem(int $cartItemId, array $data): CartItem
    {
        $cartItem = CartItem::with('variant')->findOrFail($cartItemId);

        $unitPrice = $cartItem->unit_price;
        $subtotal = $unitPrice * $data['quantity'];

        $cartItem->update([
            'quantity' => $data['quantity'],
            'subtotal' => $subtotal,
        ]);

        return $cartItem->load(['variant.product']);
    }

    public function removeItem(int $cartItemId): void
    {
        $cartItem = CartItem::findOrFail($cartItemId);
        $cartItem->delete();
    }
}