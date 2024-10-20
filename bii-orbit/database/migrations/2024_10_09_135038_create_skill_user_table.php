<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create('skill_user', function (Blueprint $table) {
            $table->foreignId('skill_id')
                ->constrained('skills')
                ->cascadeOnDelete();
            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnDelete();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('skill_user');
    }
};
