<?php

use App\Http\Controllers\NfsBooking\BookingController;
use Illuminate\Support\Facades\Route;

Route::get('booking', [BookingController::class, 'index'])
    ->name('booking.index');
