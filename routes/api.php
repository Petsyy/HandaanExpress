<?php

use App\Http\Controllers\Api\Admin\{
    CategoryController as AdminCategoryController,
    ProductController as AdminProductController,
    ProductVariantController as AdminProductVariantController,
    OrderController as AdminOrderController
};
use App\Http\Controllers\Api\Customer\{
    OrderController as CustomerOrderController,
    CartController,
    CheckoutController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/categories', [AdminCategoryController::class, 'index']);
Route::get('/products', [AdminProductController::class, 'index']);

Route::prefix('admin')->group(function () {
    Route::apiResource('categories', AdminCategoryController::class);
    Route::apiResource('products', AdminProductController::class);
    Route::apiResource('product-variants', AdminProductVariantController::class);
    Route::apiResource('orders', AdminOrderController::class);
    Route::patch('orders/{id}/status', [AdminOrderController::class, 'updateStatus']);
});

Route::prefix('customer')->group(function () {
    Route::get('orders', [CustomerOrderController::class, 'index']);
    Route::get('orders/{id}', [CustomerOrderController::class, 'show']);

    Route::get('cart', [CartController::class, 'show']);
    Route::post('cart/items', [CartController::class, 'store']);
    Route::patch('cart/items/{id}', [CartController::class, 'update']);
    Route::delete('cart/items/{id}', [CartController::class, 'destroy']);

    Route::post('checkout', [CheckoutController::class, 'store']);
});
