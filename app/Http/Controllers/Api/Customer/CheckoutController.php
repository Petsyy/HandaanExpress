<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\Customer\CheckoutRequest;
use App\Services\Customer\CheckoutService;

class CheckoutController extends Controller
{
    public function __construct(protected CheckoutService $checkoutService){}
    
    public function store(CheckoutRequest $request)
    {   
        $order = $this->checkoutService->checkout(
            auth()->id(),
            $request->validated()
        );

        return response()->json([
            'message' => 'Order placed successfully',
            'order' => $order,
        ], 201);
    }
}
