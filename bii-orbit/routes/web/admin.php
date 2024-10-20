<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/data-management', [AdminController::class, 'index'])
    ->name('admin.index');
