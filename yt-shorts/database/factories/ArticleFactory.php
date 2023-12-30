<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class ArticleFactory extends Factory
{
    /**
     * @return array|mixed[]
     */
    public function definition(): array
    {
        return [
            'title' => fake()->name(),
            'description' => fake()
                ->unique()
                ->safeEmail(),
            'user_id' => User::inRandomOrder()->first(),
        ];
    }
}
