<?php

use App\Http\Controllers\User\UserProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/profile', [UserProfileController::class, 'index'])
    ->name('profile.index');
