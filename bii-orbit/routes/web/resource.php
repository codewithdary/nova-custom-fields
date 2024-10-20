<?php

use App\Http\Controllers\Resource\ResourceController;
use Illuminate\Support\Facades\Route;

Route::get('/resources', [ResourceController::class, 'index'])
    ->name('resources.index');
