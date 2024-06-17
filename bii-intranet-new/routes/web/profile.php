<?php

use App\Http\Controllers\Profile\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get( '/profile', [ProfileController::class, 'index'])
    ->name('profile.index');