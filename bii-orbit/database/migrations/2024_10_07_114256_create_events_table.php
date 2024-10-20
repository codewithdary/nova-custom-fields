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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('created_by_id')
                ->nullable()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->foreignId('host_id')
                ->nullable()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->enum('type', ['program', 'community']);
            $table->string('title');
            $table->longText('description')
                ->nullable();
            $table->longText('agenda_description')
                ->nullable();
            $table->string('host_name')
                ->nullable();
            $table->longText('meeting_url')
                ->nullable();
            $table->string('location')
                ->nullable();
            $table->boolean('in_person')
                ->default(false);
            $table->boolean('is_synchronized')
                ->default(true);
            $table->boolean('is_notification')
                ->default(false);
            $table->boolean('status')
                ->default(false);
            $table->dateTime('starts_at');
            $table->dateTime('ends_at');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
