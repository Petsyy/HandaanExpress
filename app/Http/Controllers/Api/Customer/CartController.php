<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Api\Controller;
use App\Http\Requests\Customer\AddToCartRequest;
use App\Http\Requests\Customer\UpdateCartItemRequest;
use App\Services\Customer\CartService;

class CartController extends Controller
{
    public function __construct(protected CartService $cartService){}

    public function show()
    {
        $cart = $this->cartService->getCart(1);

        return response()->json($cart);
    }

    public function store(AddToCartRequest $request)
    {
        $cartItem = $this->cartService->addItem(1, $request->validated());

        return response()->json([
            "message" => "Item added to cart successfully",
            "cart_item" => $cartItem,
        ], 201);
    }

    public function update(UpdateCartItemRequest $request, int $id)
    {
        $cartItem = $this->cartService->updateItem($id, $request->validated());

        return response()->json([
            'message' => "Cart item updated succesfully",
            'item' => $cartItem
        ]);
    }

    public function destroy(int $id)
    {
        $this->cartService->removeItem($id);

        return response()->json([
            'message' => 'Cart item removed successfully',
        ]);
    }
}
