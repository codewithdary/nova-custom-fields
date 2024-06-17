<?php

namespace App\Traits\User;


use Illuminate\Contracts\Pagination\LengthAwarePaginator;

trait UserQueries
{
    /**
     * @param int|null $company
     * @return LengthAwarePaginator
     */
    public static function getUsersWithAvatarAndFilter(int $company = null): LengthAwarePaginator
    {
        return self::where('is_onboarded', true)
        ->when($company, function ($query) use ($company) {
            return $query->whereHas('companies', function ($q) use ($company) {
                $q->where('user_id', $company);
            });
        })
        ->whereNotNull('avatar_path')
        ->latest()
        ->paginate(35);
    }
}
