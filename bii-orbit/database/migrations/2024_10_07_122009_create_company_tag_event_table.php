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
        Schema::create('company_tag_event', function (Blueprint $table) {
            $table->foreignId('company_tag_id')
                ->constrained('company_tags')
                ->cascadeOnDelete();
            $table->foreignId('event_id')
                ->constrained('events')
                ->cascadeOnDelete();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('company_tag_event');
    }
};
