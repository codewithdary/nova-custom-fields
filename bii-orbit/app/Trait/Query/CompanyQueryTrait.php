<?php

namespace App\Trait\Query;

use App\Enums\Program\ProgramEnum;
use App\Models\Event;
use Illuminate\Database\Eloquent\Collection;

trait CompanyQueryTrait
{
    /**
     * @param string $search
     * @return Collection
     */
    public static function getAllSearchedCompanies(string $search): Collection
    {
        return self::search($search)->query(function ($builder) {
            $builder
                ->with('serviceDomain')
                ->whereNull('deleted_at')
                ->whereNotNull('logo_path')
                ->with('cohorts', 'program');
        })->oldest()->get();
    }

    /**
     * @param array $categories
     * @param array $cohorts
     * @param array $impacts
     * @param bool|string $isLatestJoined
     * @param bool|string $isOnSite
     * @param array $programIds
     * @return Collection
     */
    public static function getAllProgramsExceptResidence(array $categories, array $cohorts, array $impacts, bool|string $isLatestJoined, bool|string $isOnSite, array $programIds): Collection
    {
        return self::with('cohorts', 'program', 'categories')
            ->whereIn('program_id', $programIds)
            ->whereNull('deleted_at')
            ->whereNotNull('logo_path')
            ->when(!empty($categories), function ($query) use ($categories) {
                $query->whereHas('categories', function ($q) use ($categories) {
                    $q->whereIn('name', $categories);
                });
            })
            ->when(!empty($cohorts), function ($query) use ($cohorts) {
                $query->whereHas('impacts', function ($q) use ($cohorts) {
                    $q->whereIn('name', $cohorts);
                });
            })
            ->when(!empty($impacts), function ($query) use ($impacts) {
                $query->whereHas('impacts', function ($q) use ($impacts) {
                    $q->whereIn('name', $impacts);
                });
            })
            ->when($isLatestJoined || $isLatestJoined === 'true', function ($query) {
                $query->orderBy('created_at', 'desc');
            }, function ($query) {
                $query->orderBy('created_at', 'asc');
            })
            ->when($isOnSite || $isOnSite === 'true', function ($query) use ($isOnSite) {
                $query->where('is_on_site_at_bii', true);
            })
            ->latest()
            ->get();
    }

    /**
     * @param array $categories
     * @param array $cohorts
     * @param array $impacts
     * @param bool|string $isLatestJoined
     * @param bool|string $isOnSite
     * @return mixed
     */
    public static function getAllResidenceCompanies(array $categories, array $cohorts, array $impacts, bool|string $isLatestJoined, bool|string $isOnSite): mixed
    {
        return self::with('cohorts', 'program', 'categories')
            ->where('program_id', ProgramEnum::RESIDENCE->value)
            ->whereNull('deleted_at')
            ->whereNotNull('logo_path')
            ->when(!empty($categories), function ($query) use ($categories) {
                $query->whereHas('categories', function ($q) use ($categories) {
                    $q->whereIn('name', $categories);
                });
            })
            ->when(!empty($cohorts), function ($query) use ($cohorts) {
                $query->whereHas('impacts', function ($q) use ($cohorts) {
                    $q->whereIn('name', $cohorts);
                });
            })
            ->when(!empty($impacts), function ($query) use ($impacts) {
                $query->whereHas('impacts', function ($q) use ($impacts) {
                    $q->whereIn('name', $impacts);
                });
            })
            ->when($isLatestJoined || $isLatestJoined === 'true', function ($query) {
                $query->orderBy('created_at', 'desc');
            }, function ($query) {
                $query->orderBy('created_at', 'asc');
            })
            ->when($isOnSite || $isOnSite === 'true', function ($query) use ($isOnSite) {
                $query->where('is_on_site_at_bii', true);
            })
            ->latest()
            ->get();
    }

    /**
     * @return mixed
     */
    public function employeeEvents(): mixed
    {
        return Event::whereHas('participants', function ($query) {
            $query->whereIn('users.id', $this->employees()->pluck('users.id'));
        });
    }
}
