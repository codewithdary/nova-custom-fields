<?php

use App\Http\Controllers\News\NewsController;
use App\Http\Controllers\News\ProcessUploadedFileController;
use App\Http\Middleware\CheckUserRole;
use Illuminate\Support\Facades\Route;

Route::get( '/news', [NewsController::class, 'index'])
    ->name('news.index');

Route::get('/news/create', [NewsController::class, 'create'])
    ->name('news.create')
    ->middleware(CheckUserRole::class);

Route::post('/news', [NewsController::class, 'store'])
    ->name('news.store')
    ->middleware(CheckUserRole::class);

Route::get('/news/{news}', [NewsController::class, 'show'])
    ->name('news.show');

Route::get('/news/{news}/edit', [NewsController::class, 'edit'])
    ->name('news.edit')
    ->middleware(CheckUserRole::class);

Route::patch('/news/{news}', [NewsController::class, 'update'])
    ->name('news.update')
    ->middleware(CheckUserRole::class);

Route::delete('/news/{news}', [NewsController::class, 'destroy'])
    ->name('news.destroy')
    ->middleware(CheckUserRole::class);

Route::post('/news/filter', [NewsController::class, 'filter'])
    ->name('news.filter');

Route::post('uploads/process', ProcessUploadedFileController::class)
    ->name('uploads.process');
