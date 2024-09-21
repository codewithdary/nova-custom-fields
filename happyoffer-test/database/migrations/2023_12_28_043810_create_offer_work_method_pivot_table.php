<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('offer_work_method', function (Blueprint $table) {
            $table->id();
            $table->foreignId('offer_id')
                ->constrained('offers')
                ->cascadeOnDelete();
            $table->foreignId('work_method_id')
                ->nullable()
                ->constrained('work_methods')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offer_work_method');
    }
};
