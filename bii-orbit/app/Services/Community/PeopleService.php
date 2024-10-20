<?php

namespace App\Services\Community;

use App\Models\User;
use Illuminate\Http\Request;

class PeopleService
{
    /**
     * @param Request $request
     * @return array
     */
    public function index(Request $request): array
    {
        return $this->getFilters($request);
    }

    /**
     * @param User $user
     * @return User
     */
    public function show(User $user): User
    {
        return $user->load('skills', 'events');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getFilters(Request $request): array
    {
        return [
            'search' => $request->query('search', ''),
            'cohorts' => $request->query('cohorts', []),
            'categories' => $request->query('categories', []),
            'kths' => $request->query('kths', []),
            'isLatestJoined' => $request->query('isLatestJoined', ''),
        ];
    }
}
