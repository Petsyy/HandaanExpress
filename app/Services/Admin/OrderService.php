<?php

namespace App\Services\Admin;

use App\Models\Order;

class OrderService
{
    public function getAllOrders()
    {
        return Order::with(['user', 'items'])
            ->latest()
            ->get();
    }

    public function getById(int $id): Order
    {
        return Order::with(['user', 'items'])->findOrFail($id);
    }

    public function updateStatus(int $id, array $data): Order
    {
        $order = Order::findOrFail($id);

        $order->update([
            "status" => $data['status'],
        ]);

        return $order->load(['user', 'items']);
    }
    

}