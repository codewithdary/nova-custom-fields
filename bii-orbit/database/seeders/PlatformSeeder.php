<?php

namespace Database\Seeders;

use App\Models\Platform;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class PlatformSeeder extends Seeder
{
    /**
     * @return void
     */
    public function run(): void
    {
        $json = File::get(database_path('data/platforms.json'));
        $platforms = collect(json_decode($json));

        $time = Carbon::now();

        $platforms->each(function ($platform) use (&$time) {
            Platform::insert([
                'id' => $platform->id,
                'name' => $platform->name,
                'description' => $platform->description,
                'created_at' => $time->format('Y-m-d H:i:s'),
                'updated_at' => $time->format('Y-m-d H:i:s'),
            ]);

            $time->addMinute();
        });
    }
}
