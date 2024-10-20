<?php

namespace App\Services\Auth;

use App\Http\Requests\Auth\PasswordResetRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class PasswordResetService
{
    /**
     * @param PasswordResetRequest $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(PasswordResetRequest $request): RedirectResponse
    {
        $user = User::where('email', $request->email)->first();

        if(isset($user) && ! $user->isOnboarded()) {
            return back()->with([
                'message' => __('company.auth_onboarding_notify')
            ]);
        } else {
            $status = Password::sendResetLink(
                $request->only('email')
            );

            if ($status == Password::RESET_LINK_SENT) {
                return back()->with([
                    'status', __($status),
                    'message' => __('company.auth_password_reset_link')
                ]);
            }
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}
