<?php

namespace App\Http\Controllers\NfsBooking;

use App\Http\Controllers\Controller;
use App\Models\CompanyTag;
use App\Models\ContentTag;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BookingController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Booking/Booking', [
            'title' => 'NFS booking',
        ]);
    }
}
