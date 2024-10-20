<?php

use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::get('/verify/notice', VerifyEmailController::class)
    ->middleware('auth')
    ->name('verification.notice');
