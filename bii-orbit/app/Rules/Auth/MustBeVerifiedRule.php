<?php

namespace App\Rules\Auth;

use App\Models\User;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class MustBeVerifiedRule implements ValidationRule
{
    /**
     * @param string $attribute
     * @param mixed $value
     * @param Closure $fail
     * @return void
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $user = User::getUserBasedOnEmail(request('email'));

        if ($user && !$user->isOnboarded()) {
            $fail(__('validation.not_onboarded', ['attribute' => request('email')]));
        }
    }
}
