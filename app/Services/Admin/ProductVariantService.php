<?php

namespace App\Services;

use App\Models\ProductVariant;

class ProductVariantService
{
    public function getAll()
    {
        return ProductVariant::with('product')->get();
    }

    public function createVariant(array $data): ProductVariant
    {
        if(!empty($data['is_default']) && $data['is_default']) {
            ProductVariant::where('product_id', $data['product_id'])
                ->update(['is_default' => false]);
        }

        return ProductVariant::create([
            'product_id' => $data['product_id'],
            'name' => $data['name'],
            'price' => $data['price'],
            'good_for' => $data['good_for'] ?? null,
            'is_default' => $data['is_default'] ?? false,
            'is_available' => $data['is_available'] ?? true,
        ]);
    }
    
    public function getById(int $id): ProductVariant
    {
        return ProductVariant::with('product')->findOrFail($id);
    }
}