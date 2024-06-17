<?php

use App\Http\Controllers\Feedback\FeedbackController;
use Illuminate\Support\Facades\Route;

Route::post('/feedback', [FeedbackController::class, 'store'])
    ->name('feedback.store');
