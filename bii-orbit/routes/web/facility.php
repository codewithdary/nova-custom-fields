<?php

use App\Http\Controllers\Facility\FacilityController;
use Illuminate\Support\Facades\Route;

Route::get('/facility', [FacilityController::class, 'index'])
    ->name('facilities.index');
