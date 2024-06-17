<?php

use App\Http\Controllers\Community\UserController;
use App\Http\Middleware\CheckUserRole;
use Illuminate\Support\Facades\Route;

Route::get( '/users', [UserController::class, 'index'])
    ->name('community.index');

Route::get( '/users/{user}', [UserController::class, 'show'])
    ->name('community.show');

Route::delete('/users/{user}', [UserController::class, 'destroy'])
    ->name('users.destroy')
    ->middleware(CheckUserRole::class);