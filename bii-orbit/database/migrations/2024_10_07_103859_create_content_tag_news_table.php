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
        Schema::create('content_tag_news', function (Blueprint $table) {
            $table->foreignId('content_tag_id')
                ->constrained('content_tags')
                ->cascadeOnDelete();
            $table->foreignId('news_id')
                ->constrained('news')
                ->cascadeOnDelete();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('content_tag_news');
    }
};
