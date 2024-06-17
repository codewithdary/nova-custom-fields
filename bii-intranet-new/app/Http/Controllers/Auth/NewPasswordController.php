<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\ValidateResetPasswordRequest;
use App\Traits\InertiaErrorResponseTrait;
use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class NewPasswordController extends Controller
{
    use InertiaErrorResponseTrait;

    /**
     * @param $token
     * @param $email
     * @return Response
     */
    public function create($token, $email): Response
    {
        $decryptedEmail = decrypt($email);
        $passwordReset = DB::table('password_resets')->where('email', $decryptedEmail)->first();

        if (
            ! $passwordReset ||
            Carbon::parse($passwordReset->created_at)->addHour()->isPast()
        ) {
            return $this->render(403);
        }

        return Inertia::render('Auth/ResetPassword', [
            'title' => 'Reset password',
            'email' => $decryptedEmail,
            'token' => $token
        ]);
    }

    /**
     * @param ValidateResetPasswordRequest $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(ValidateResetPasswordRequest $request): RedirectResponse
    {
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return redirect()->route('login')->with([
                'status', __($status),
                'message' => 'Your password has been successfully reset. Please log in to use the intranet.'
            ]);
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)]
        ]);
    }
}
