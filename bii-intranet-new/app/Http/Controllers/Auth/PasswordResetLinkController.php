<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\PasswordResetRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'title' => 'Reset your password',
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status')
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function store(PasswordResetRequest $request): RedirectResponse
    {
        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return back()->with([
                'status', __($status),
                'message' => 'A password reset link has been sent to your email address. Please check your inbox and follow the steps.'
            ]);
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }
}
