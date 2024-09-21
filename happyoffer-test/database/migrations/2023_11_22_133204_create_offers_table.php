<?php

use App\Enums\OfferStatusEnum;
use App\Enums\OfferTypeEnum;
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
        Schema::create('offers', function (Blueprint $table) {
            // General Fields
            $table->id();
            $table->string('name');
            $table->boolean('is_visible')
                ->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
