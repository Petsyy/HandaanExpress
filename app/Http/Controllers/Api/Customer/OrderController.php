<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Api\Controller;
use App\Services\OrderService;

class OrderController extends Controller
{
    public function __construct(protected OrderService $orderService){}

    public function index()
    {
        $orders = $this->orderService->getUserOrders(auth()->id());

        return response()->json($orders);
    }

    public function show(int $id)
    {
        $order = $this->orderService->getUserOrderById(auth()->id(), $id);

        return response()->json($order);
    }
}
