<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Customer\MenuController;
use App\Http\Controllers\Api\Customer\ProductDetailsController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('customer/LandingPage');
});

Route::get('/menu', [MenuController::class, 'index'])->name('menu');

Route::get('/product/{id}', [ProductDetailsController::class, 'show'])->name('product.show');

Route::get('/cart', function () {
    return Inertia::render('customer/AddToCartPage');
})->name('cart');

Route::get('/order', function () {
    return Inertia::render('customer/OrderPage');
})->name('order');
