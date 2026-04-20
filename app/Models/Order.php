<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        "user_id",
        "order_number",
        "status",
        "payment_method",
        "payment_status",
        "subtotal",
        "total",
        "placed_at",
        "created_at",
        "updated_at"
    ];
    protected $casts = [
        'subtotal' => 'decimal:2',
        'total' => 'decimal:2',
        'pickup_date' => 'date',
        'pickup_time' => 'datetime:H:i',
        'placed_at' => 'datetime',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
