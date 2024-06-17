<?php

namespace App\Http\Controllers\Profile;

use App\Enums\User\UserGenderEnum;
use App\Http\Controllers\Controller;
use App\Models\CompanyTag;
use App\Models\ContentTag;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index(): Response
    {
        $user = User::with('companies', 'companies.biiProgram', 'companyTags', 'tags')->find(Auth::id());

        return Inertia::render('Profile/Profile', [
            'title' => 'Profile',
            'current' => $user,
            'selectedCompanyTags' => $user->companyTags()->pluck('name', 'id'),
            'selectedContentTags' => $user->tags()->pluck('name', 'id'),
            'selectedSkills' => $user->skills()->pluck('name', 'id'),
            'contentTags' => ContentTag::pluck('name', 'id'),
            'companyTags' => CompanyTag::pluck('name', 'id'),
            'skills' => Skill::pluck('name', 'id'),
            'genders' => UserGenderEnum::cases()
        ]);
    }
}
