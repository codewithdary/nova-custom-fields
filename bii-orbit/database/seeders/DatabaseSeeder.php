<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * @return void
     */
    public function run(): void
    {
        $this->call([
            EventSeeder::class,
            PlatformSeeder::class,
            InterestSeeder::class,
            KthSeeder::class,
            AdvisorSeeder::class,
            EndorsementSeeder::class,
        ]);
    }
}
