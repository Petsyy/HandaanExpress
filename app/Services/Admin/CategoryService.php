<?php

namespace App\Services\Admin;
use Illuminate\Support\Str;
use App\Models\Category;

class CategoryService
{
    public function getAvailableProducts()
    {
        return Category::all();
    }

    public function createCategory(array $data): Category
    {
        return Category::create([
            'name' => $data['name'],
            'slug' => Str::slug($data['name']),
            'is_active' => $data['is_active'] ?? true,
        ]);
    }

    public function getById(int $id): Category
    {
        return Category::findOrFail($id);
    }
}