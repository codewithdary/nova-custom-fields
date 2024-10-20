<?php

use App\Http\Controllers\Network\AdvisorController;
use App\Http\Controllers\Network\CollaboratorController;
use App\Http\Controllers\Network\StoreEndorsementController;
use Illuminate\Support\Facades\Route;

Route::prefix('network')->name('network.')->group(function () {
    Route::get('/collaborators', [CollaboratorController::class, 'index'])
        ->name('collaborators.index');

    Route::get('/collaborators/{collaborator}', [CollaboratorController::class, 'show'])
        ->name('collaborators.show');

    Route::post('/collaborators/{collaborator}/endorsement', StoreEndorsementController::class)
        ->name('endorsement.store');

    Route::get('/advisors', [AdvisorController::class, 'index'])
        ->name('advisors.index');

    Route::get('/advisors/{advisor}', [AdvisorController::class, 'show'])
        ->name('advisors.show');

    Route::get('/board', [AdvisorController::class, 'index'])
        ->name('board.index');

    Route::get('/board/{advisor}', [AdvisorController::class, 'show'])
        ->name('board.show');
});
