<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventStatusController extends Controller
{
    /**
     * @param Request $request
     * @return void
     */
    public function __invoke(Request $request): void
    {
        $event = Event::find($request->event_id);

        $event->update([
            'status' => $request->status
        ]);
    }
}
