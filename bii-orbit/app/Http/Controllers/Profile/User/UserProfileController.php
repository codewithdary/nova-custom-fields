<?php

namespace App\Http\Controllers\Profile\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\User\UpdateUserProfileRequest;
use App\Models\Skill;
use App\Models\User;
use App\Services\Profile\User\UserService;
use Inertia\Inertia;
use Inertia\Response;

class UserProfileController extends Controller
{
    /**
     * @var UserService
     */
    protected UserService $userService;

    /**
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param User $user
     * @return Response
     */
    public function index(User $user): Response
    {
        $this->userService->index($user);

        return Inertia::render('Profile/User/Edit', [
            'title' => __('title.profile_of', ['name' => $user->full_name]),
            'skills' => Skill::getSkillNameAndIds(),
            'user' => $user
        ]);
    }

    /**
     * @param UpdateUserProfileRequest $request
     * @param User $user
     * @return void
     */
    public function update(UpdateUserProfileRequest $request, User $user): void
    {
        $this->userService->update($request, $user);
    }
}
