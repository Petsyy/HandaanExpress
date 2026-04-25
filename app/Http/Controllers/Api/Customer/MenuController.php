<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Api\Controller;
use App\Models\Product;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $products = Product::with('category')
            ->where('is_available', true)
            ->latest()
            ->get()
            ->map(function ($product) {
                return [
                    'id' => $product->id,
                    'name' => $product->name,
                    'image' => $product->image,
                    'price' => (float) $product->base_price,
                    'rating' => 4.5,
                    'category' => $product->category?->name ?? 'Uncategorized',
                ];
            });

        return Inertia::render('customer/MenuPage', [
            'products' => $products,
        ]);
    }
}
