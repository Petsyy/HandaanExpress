<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
});

Route::get('/menu', function () {
    return Inertia::render('MenuPage');
});

Route::get('/product/{id}', function ($id) {
    return Inertia::render('ProductDetailsPage', [
        'productId' => $id,
    ]);
}) -> name('product.show');
