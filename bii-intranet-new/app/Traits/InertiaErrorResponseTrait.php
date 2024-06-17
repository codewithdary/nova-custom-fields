<?php

namespace App\Traits;

use Inertia\Inertia;
use Inertia\Response;

trait InertiaErrorResponseTrait
{
    /**
     * @param $status
     * @return Response|mixed
     */
    public function render($status): mixed
    {
        if (app()->environment(['local', 'testing'])) {
            return Inertia::render('Error', [
                'status' => $status,
            ]);
        }

        return $status;
    }
}
