<?php

namespace App\Trait\Query;

use Illuminate\Database\Eloquent\Collection;

trait UserQueryTrait
{
    /**
     * @param string $search
     * @return Collection
     */
    public static function getAllSearchedUsers(string $search): Collection
    {
        return self::search($search)->query(function ($builder) {
            $builder
                ->whereNotNull('email_verified_at')
                ->with('skills');
        })->oldest()->get();
    }

    /**
     * @param array $cohorts
     * @param array $categories
     * @param array $kths
     * @param bool|string $isLatestJoined
     * @return mixed
     */
    public static function getVerifiedUsers(array $cohorts, array $categories, array $kths, bool|string $isLatestJoined): mixed
    {
        return self::whereNotNull('email_verified_at')
            ->orderBy('created_at', 'desc')
            ->when(!empty($cohorts), function ($query) use ($cohorts) {
                $query->whereHas('companies', function ($query) use ($cohorts) {
                    $query->whereHas('cohorts', function ($query) use ($cohorts) {
                        $query->whereIn('name', $cohorts);
                    });
                });
            })
            ->when(!empty($categories), function ($query) use ($categories) {
                $query->whereHas('companies', function ($query) use ($categories) {
                    $query->whereHas('categories', function ($query) use ($categories) {
                        $query->whereIn('name', $categories);
                    });
                });
            })
            ->when(!empty($kths), function ($query) use ($kths) {
                $query->whereHas('kths', function ($query) use ($kths) {
                    $query->whereIn('name', $kths);
                });
            })
            ->when($isLatestJoined || $isLatestJoined === 'true', function ($query) {
                $query->orderBy('created_at', 'desc');
            }, function ($query) {
                $query->orderBy('created_at', 'asc');
            })
            ->take(50)
            ->get();
    }

    /**
     * @param string $email
     * @return mixed
     */
    public static function getUserBasedOnEmail(string $email): mixed
    {
        return self::where('email', $email)
            ->first();
    }
}
