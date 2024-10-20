<?php

use App\Http\Controllers\Home\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)
    ->name('home');
