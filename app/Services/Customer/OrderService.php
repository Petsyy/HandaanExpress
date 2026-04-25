<?php

namespace App\Services\Customer;

use App\Models\Order;

class OrderService
{
    public function getUserOrders(int $userId)
    {
        return Order::with('items')
            ->where('user_id', $userId)
            ->latest()
            ->get();
    }

    public function getUserOrderById(int $userId, int $orderId): Order
    {
        return Order::with('items')
            ->where('user_id', $userId)
            ->findOrFail($orderId);
    }
}
