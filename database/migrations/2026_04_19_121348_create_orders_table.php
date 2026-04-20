<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->string('order_number')->unique();

            $table->string('status');
            $table->string('payment_method');
            $table->string('payment_status');

            $table->decimal('subtotal', 10, 2);
            $table->decimal('total', 10, 2);

            $table->text('notes')->nullable();

            $table->date('pickup_date')->nullable();
            $table->time('pickup_time')->nullable();
            $table->timestamp('placed_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
