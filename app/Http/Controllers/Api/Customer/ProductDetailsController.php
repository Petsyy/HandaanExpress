<?php

namespace App\Http\Controllers\Api\Customer;

use App\Http\Controllers\Api\Controller;
use App\Models\Product;
use Inertia\Inertia;

class ProductDetailsController extends Controller
{
    public function show(Product $product)
    {
        $product->load([
            'category',
            'variants',
        ]);

        return Inertia::render('customer/ProductDetailsPage', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'image' => $product->image,
                'price' => (float) $product->base_price,
                'rating' => 4.5,
                'category' => $product->category?->name ?? 'Uncategorized',
                'variants' => $product->variants,
            ],
        ]);
    }
}
