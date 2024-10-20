<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\Auth\AuthenticatedSessionService;
use App\Trait\InertiaErrorResponseTrait;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    use InertiaErrorResponseTrait;

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'title' => __('title.login'),
            'resetPasswordRoute' => route('password.request')
        ]);
    }

    /**
     * @param LoginRequest $request
     * @param AuthenticatedSessionService $authenticatedSessionService
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function store(LoginRequest $request, AuthenticatedSessionService $authenticatedSessionService): RedirectResponse
    {
        $authenticatedSessionService->store($request);

        return redirect()->route('home');
    }

    /**
     * @param Request $request
     * @param AuthenticatedSessionService $authenticatedSessionService
     * @return RedirectResponse
     */
    public function destroy(Request $request, AuthenticatedSessionService $authenticatedSessionService): RedirectResponse
    {
        $authenticatedSessionService->destroy($request);

        return redirect()->route('login');
    }
}
