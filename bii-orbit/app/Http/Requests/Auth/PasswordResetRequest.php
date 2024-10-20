<?php

namespace App\Http\Requests\Auth;

use App\Rules\Auth\MustBeVerifiedRule;
use Illuminate\Foundation\Http\FormRequest;

class PasswordResetRequest extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return string[]
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email', new MustBeVerifiedRule]
        ];
    }
}
