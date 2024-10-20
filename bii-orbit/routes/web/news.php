<?php

use App\Http\Controllers\News\NewsController;
use Illuminate\Support\Facades\Route;

Route::prefix('news')->name('news.')->group(function () {
    Route::get('/', [NewsController::class, 'index'])
        ->name('index');

    Route::get('/{news}', [NewsController::class, 'show'])
        ->name('show');
});
