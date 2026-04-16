<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'variants'])
            ->where('is_available', true)
            ->get();

        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|string|max:255',
            'base_price' => 'nullable|numeric|min:0',
            'is_featured' => 'boolean',
            'is_available' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        $product = Product::create([
            'category_id' => $validated['category_id'],
            'name' => $validated['name'],
            'slug' => Str::slug($validated['name']),
            'description' => $validated['description'] ?? null,
            'image' => $validated['image'] ?? null,
            'base_price' => $validated['base_price'] ?? 0,
            'is_featured' => $validated['is_featured'] ?? false,
            'is_available' => $validated['is_available'] ?? true,
            'sort_order' => $validated['sort_order'] ?? 0,
        ]);

        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product,
        ], 201);
    }

    public function show($id)
    {
        $product = Product::with(['category', 'variants'])->findOrFail($id);

        return response()->json($product);
    }
}
