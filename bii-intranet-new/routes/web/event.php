<?php


use App\Http\Controllers\Event\EventController;
use App\Http\Controllers\Event\EventExportController;
use App\Http\Controllers\Event\EventExportMultipleController;
use App\Http\Controllers\Event\EventSignUpController;
use App\Http\Controllers\Event\EventStatusController;
use App\Http\Controllers\Event\ShowBiiEventController;
use App\Http\Controllers\Event\ShowUserEventController;
use App\Http\Middleware\CheckUserRole;
use App\Http\Middleware\OnlyVisibleForAuthenticatedUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get( '/events', [EventController::class, 'index'])
    ->name('events.index');

Route::get( '/events/user/{user?}', ShowUserEventController::class)
    ->defaults('user', Auth::id())
    ->name('events.user.index')
    ->middleware(OnlyVisibleForAuthenticatedUser::class);

Route::get( '/events/bii', ShowBiiEventController::class)
    ->name('events.bii.index')
    ->middleware(CheckUserRole::class);

Route::get( '/events/create', [EventController::class, 'create'])
    ->name('events.create')
    ->middleware(CheckUserRole::class);

Route::get( '/events/{event}', [EventController::class, 'show'])
    ->name('events.show');

Route::post('/events', [EventController::class, 'store'])
    ->name('events.store')
    ->middleware(CheckUserRole::class);

Route::get( '/events/{event}/edit', [EventController::class, 'edit'])
    ->name('events.edit')
    ->middleware(CheckUserRole::class);

Route::post( '/events/sign-up', EventSignUpController::class)
    ->name('events.sign-up');

Route::post( '/events/status', EventStatusController::class)
    ->name('events.status');

Route::delete('/events/{event}', [EventController::class, 'destroy'])
    ->name('events.destroy')
    ->middleware(CheckUserRole::class);

Route::get('/events/export/{event}', [EventExportController::class, 'export'])
    ->name('events.export');

Route::post('/events/export-all', EventExportMultipleController::class)
    ->name('events.export-all');