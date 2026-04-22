<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('customer/LandingPage');
});

Route::get('/menu', function () {
    return Inertia::render('customer/MenuPage');
});

Route::get('/product/{id}', function ($id) {
    return Inertia::render('customer/ProductDetailsPage', ['productId' => $id,]);
})->name('product.show');

Route::get('/cart', function () {
    return Inertia::render('customer/AddToCartPage');
})->name('cart');

Route::get('/order', function () {
    return Inertia::render('customer/OrderPage');
})->name('order');
