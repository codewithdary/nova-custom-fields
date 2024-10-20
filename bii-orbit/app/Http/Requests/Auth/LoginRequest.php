<?php

namespace App\Http\Requests\Auth;

use App\Rules\Auth\MustBeVerifiedRule;
use App\Trait\Helpers\AuthenticateTrait;
use App\Trait\InertiaErrorResponseTrait;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    use InertiaErrorResponseTrait, AuthenticateTrait;

    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string', new MustBeVerifiedRule],
        ];
    }
}
