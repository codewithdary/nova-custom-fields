<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Http\Requests\Event\StoreEventSignUpRequest;
use Illuminate\Support\Facades\Auth;

class EventSignUpController extends Controller
{
    /**
     * @param StoreEventSignUpRequest $request
     * @return void
     */
    public function __invoke(StoreEventSignUpRequest $request): void
    {
        Auth::user()->events()->toggle($request->event_id);
    }
}
