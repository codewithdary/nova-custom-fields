<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\PasswordResetRequest;
use App\Services\Auth\PasswordResetService;
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
            'status' => session('status'),
            'title' => __('title.forgot_password'),
            'canResetPassword' => Route::has('password.request')
        ]);
    }

    /**
     * @param PasswordResetRequest $request
     * @param PasswordResetService $passwordResetService
     * @return void
     * @throws ValidationException
     */
    public function store(PasswordResetRequest $request, PasswordResetService $passwordResetService): void
    {
        $passwordResetService->store($request);
    }
}
