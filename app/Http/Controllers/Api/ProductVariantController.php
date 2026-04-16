<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProductVariant;
use Illuminate\Http\Request;

class ProductVariantController extends Controller
{
    public function index()
    {
        $variants = ProductVariant::with('product')->get();

        return response()->json($variants);
    }

    public function store(Request $request)
    {
        $variants = $request->validate([
            'product_id' => 'required|exists:products,id',
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'good_for' => 'nullable|string|max:255',
            'is_default' => 'boolean',
            'is_available' => 'boolean',
        ]);

    }
}
