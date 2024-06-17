<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Skill;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{

    /**
     * @var
     */
    public $company;

    /**
     * @var
     */
    public $skill;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->company = Company::where('name', $request->query('company'))->value('id');
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $company = Company::where('name', $request->query('company'))->value('id');

        return Inertia::render(
            'Community/Community', [
                'title' => 'Community',
                'companies' => Company::orderBy('name')->pluck('name', 'id'),
                'users' => User::getUsersWithAvatarAndFilter($company),
            ]
        );
    }

    /**
     * @param User $user
     * @return Response
     */
    public function show(User $user): Response
    {
        $user->load('skills');

        return Inertia::render(
            'Community/CommunityDetail', [
                'title' => 'Community member details',
                'firstCompany' => $user->companies->first(),
                'user' => $user,
            ]
        );
    }

    /**
     * @param User $user
     * @return Response
     */
    public function destroy(User $user): Response
    {
        try {
            $user->delete();
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }

        return Inertia::render(
            'Community/Community', [
                'title' => 'Community',
                'companies' => Company::orderBy('name')->pluck('name', 'id'),
                'skills' => Skill::orderBy('name')->pluck('name', 'id'),
                'users' => User::getUsersWithAvatarAndFilter($this->company),
            ]
        );
    }
}
