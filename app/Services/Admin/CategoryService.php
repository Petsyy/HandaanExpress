<?php

namespace App\Services;
use Illuminate\Support\Str;
use App\Models\Category;

class CategoryService
{
    public function getAll()
    {
        return Category::all();
    }

    public function createCategory(array $data): Category
    {
        return Category::create([
            'name' => $data['name'],
            'slug' => str::slug($data['name']),
            'is_active' => $data['is_active']
        ]);
    }

    public function getById(int $id): Category
    {
        return Category::findOrFail($id);
    }
}