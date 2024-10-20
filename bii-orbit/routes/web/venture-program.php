<?php

use App\Http\Controllers\VentureProgram\VentureProgramController;
use Illuminate\Support\Facades\Route;

Route::get('/venture-program', [VentureProgramController::class, 'index'])
    ->name('venture-program.index');
