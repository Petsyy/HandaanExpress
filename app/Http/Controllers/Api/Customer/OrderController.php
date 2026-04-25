<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Api\Controller;
use App\Services\Customer\OrderService;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function __construct(protected OrderService $orderService){}

    public function index()
    {
        $orders = $this->orderService->getUserOrders(Auth::id());

        return response()->json($orders);
    }

    public function show(int $id)
    {
        $order = $this->orderService->getUserOrderById(Auth::id(), $id);

        return response()->json($order);
    }
}
