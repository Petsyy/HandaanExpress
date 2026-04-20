<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    protected $fillable = [
        'product_id',
        'name',
        'price',
        'stock',
        'is_default',
        'is_available',
    ];
    protected $casts = [
    'price' => 'decimal:2',
    'stock' => 'integer',
    'is_default' => 'boolean',
    'is_available' => 'boolean',
];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}
