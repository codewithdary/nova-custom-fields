<?php

namespace App\Services\Auth;

use App\Http\Requests\Auth\LoginRequest;
use App\Trait\InertiaErrorResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionService
{
    use InertiaErrorResponseTrait;

    /**
     * @param LoginRequest $request
     * @return void
     * @throws ValidationException
     */
    public function store(LoginRequest $request): void
    {
        $request->authenticate();

        $request->session()->regenerate();
    }

    /**
     * @param Request $request
     * @return void
     */
    public function destroy(Request $request): void
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
