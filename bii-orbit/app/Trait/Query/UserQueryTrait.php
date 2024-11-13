<?php

namespace App\Trait\Query;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

trait UserQueryTrait
{
    /**
     * @param string|null $search
     * @param array $cohorts
     * @param array $categories
     * @param array $technologies
     * @param array $indications
     * @param array $kths
     * @param bool|string|null $isLatestJoined
     * @return LengthAwarePaginator
     */
    public static function getAllSearchedAndFilteredUsers(
        ?string $search = null,
        array $cohorts = [],
        array $verticals = [],
        array $technologies = [],
        array $indications = [],
        array $kths = [],
        bool|string|null $isLatestJoined = null
    ): LengthAwarePaginator
    {
        return self::search($search)->query(function ($builder) use ($cohorts, $verticals, $technologies, $indications, $kths, $isLatestJoined) {
            $builder
                ->select('id', 'avatar_path', 'firstname', 'lastname', 'company_position', 'linkedin_url', 'phone_number', 'is_onboarded', 'email')
                ->whereNotNull('email_verified_at')
                ->orderBy('id', 'desc')
                ->with('skills');

            $builder->when(!empty($cohorts), function ($query) use ($cohorts) {
                $query->whereHas('company', function ($query) use ($cohorts) {
                    $query->whereHas('cohorts', function ($query) use ($cohorts) {
                        $query->whereIn('name', $cohorts);
                    });
                });
            });

            $builder->when(!empty($verticals), function ($query) use ($verticals) {
                $query->whereHas('company', function ($query) use ($verticals) {
                    $query->whereHas('vertical', function ($query) use ($verticals) {
                        $query->whereIn('name', $verticals);
                    });
                });
            });

            $builder->when(!empty($technologies), function ($query) use ($technologies) {
                $query->whereHas('company', function ($query) use ($technologies) {
                    $query->whereHas('technologies', function ($query) use ($technologies) {
                        $query->whereIn('name', $technologies);
                    });
                });
            });

            $builder->when(!empty($indications), function ($query) use ($indications) {
                $query->whereHas('company', function ($query) use ($indications) {
                    $query->whereHas('indications', function ($query) use ($indications) {
                        $query->whereIn('name', $indications);
                    });
                });
            });

            $builder->when(!empty($kths), function ($query) use ($kths) {
                $query->whereHas('kths', function ($query) use ($kths) {
                    $query->whereIn('name', $kths);
                });
            });

            $builder->when(
                filter_var($isLatestJoined, FILTER_VALIDATE_BOOLEAN),
                function ($query) {
                    $query->orderBy('created_at', 'desc');
                },
                function ($query) {
                    $query->orderBy('created_at', 'asc');
                }
            );
        })
            ->paginate();
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

    /**
     * @param string $userHash
     * @return mixed
     */
    public static function getUserBasedOnRegisterHash(string $userHash): mixed
    {
        return self::with('events')
            ->where('register_hash', $userHash)
            ->first();
    }

    /**
     * @return mixed
     */
    public static function getBiiAnchorsNameAndIds(): mixed
    {
        return self::whereNotNull('is_onboarded')
            ->take(10)
            ->get()
            ->mapWithKeys(function ($user) {
                return [$user->id => $user->full_name];
            });
    }

    /**
     * @param int $size
     * @param string $direction
     * @param string $sort
     * @param string $search
     * @param int $companyId
     * @return LengthAwarePaginator
     */
    public static function getPaginatedEmployeesOfCompany(int $size, string $direction, string $sort, string $search, int $companyId): LengthAwarePaginator
    {
        return self::search($search)
            ->query(function ($builder) use ($companyId, $sort, $direction) {
                $builder->where('company_id', $companyId)
                    ->select('id', 'company_id', 'firstname', 'lastname', 'company_position', 'email', 'email_verified_at', 'is_onboarded')
                    ->orderBy($sort, $direction);
            })
            ->paginate($size);
    }

    /**
     * @param int $size
     * @param string $direction
     * @param string $sort
     * @param string $search
     * @return LengthAwarePaginator
     */
    public static function getAllPaginatedPeople(string $search, int $size, string $direction, string $sort): LengthAwarePaginator
    {
        return self::search($search)
            ->query(function ($builder) use ($sort, $direction) {
                $builder->select('id', 'company_id', 'firstname', 'lastname', 'company_position', 'email', 'email_verified_at', 'is_onboarded')
                    ->orderBy($sort, $direction);
            })
            ->paginate($size);
    }
}
