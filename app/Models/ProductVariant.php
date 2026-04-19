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

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}
