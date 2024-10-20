<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * @var string|null
     */
    protected static ?string $password;

    /**
     * @return array
     */
    public function definition(): array
    {
        return [
            'firstname' => fake()->name(),
            'lastname' => fake()->name(),
            'linkedin_url' => fake()->url(),
            'phone_number' => '',
            'country' => "Denmark",
            'terms_agreement' => 1,
            'is_onboarded' => 1,
            'description' => '',
            'email' => fake()->unique()->safeEmail(),
            'company_position' => fake()->word(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }
}
