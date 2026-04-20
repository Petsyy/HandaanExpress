<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\Admin\UpdateOrderStatusRequest;
use App\Services\Admin\OrderService;

class OrderController extends Controller
{
    public function __construct(protected OrderService $orderService){}

    public function index()
    {
        $orders = $this->orderService->getAllOrders();

        return response()->json($orders);
    }

    public function show(int $id)
    {
        $order = $this->orderService->getById($id);

        return response()->json($order);
    }

    public function updateStatus(UpdateOrderStatusRequest $request, int $id)
    {
        $order = $this->orderService->updateStatus($id, $request->validated());

        return response()->json([
            'message' => 'Order status updated succesfully',
            'order' => $order,
        ]);
    }
}

