<?php

namespace App\Services;

use App\Models\Product;
use Illuminate\Support\Str;

class ProductService
{
    public function getAvailableProducts()
    {
        return Product::with(['category', 'variants'])
            ->where('is_available', true)
            ->get();
    }

    public function createProduct(array $data): Product
    {
        return Product::create([
            'category_id' => $data['category_id'],
            'name' => $data['name'],
            'slug' => Str::slug($data['name']),
            'description' => $data['description'] ?? null,
            'image' => $data['image'] ?? null,
            'base_price' => $data['base_price'] ?? 0,
            'is_featured' => $data['is_featured'] ?? false,
            'is_available' => $data['is_available'] ?? true,
            'sort_order' => $data['sort_order'] ?? 0,
        ]);
    }

    public function getById(int $id): Product
    {
        return Product::with(['category', 'variants'])->findOrFail($id);
    }
}