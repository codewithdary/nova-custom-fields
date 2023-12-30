<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

Route::resource('/articles', ArticleController::class)
    ->middleware('auth');
