<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Trait\InertiaErrorResponseTrait;
use Illuminate\Http\Request;
use Inertia\Response;

class VerifyEmailController extends Controller
{
    use InertiaErrorResponseTrait;

    /**
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        return $this->render(403);
    }
}
