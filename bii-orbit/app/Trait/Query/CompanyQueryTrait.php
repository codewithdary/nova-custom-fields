<?php

namespace App\Trait\Query;

use App\Enums\Program\ProgramEnum;
use App\Models\Event;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

trait CompanyQueryTrait
{
    /**
     * @param string $search
     * @param array $categories
     * @param array $cohorts
     * @param array $impacts
     * @param bool|string $isLatestJoined
     * @param bool|string $isOnSite
     * @param bool|string $isResidentCompany
     * @return LengthAwarePaginator
     */
    public static function getAllSearchedAndFilteredCompanies(
        string $search,
        array $verticals = [],
        array $technologies = [],
        array $indications = [],
        array $cohorts = [],
        array $impacts = [],
        bool|string $isLatestJoined = false,
        bool|string $isOnSite = false,
        bool|string $isResidentCompany = false
    ): LengthAwarePaginator
    {
        return self::search($search)->query(function ($builder) use ($verticals, $technologies, $indications, $cohorts, $impacts, $isLatestJoined, $isOnSite, $isResidentCompany) {
            $builder->with('cohorts', 'program', 'vertical', 'technologies', 'indications')
                ->select('id', 'logo_path', 'name', 'country', 'excerpt', 'description', 'vertical_id')
                ->whereNull('deleted_at')
                ->whereNotNull('logo_path');

            $builder->when(!empty($verticals), function ($query) use ($verticals) {
                $query->whereHas('vertical', function ($q) use ($verticals) {
                    $q->whereIn('name', $verticals);
                });
            });

            $builder->when(!empty($cohorts), function ($query) use ($cohorts) {
                $query->whereHas('cohorts', function ($q) use ($cohorts) {
                    $q->whereIn('name', $cohorts);
                });
            });

            $builder->when(!empty($indications), function ($query) use ($indications) {
                $query->whereHas('indications', function ($q) use ($indications) {
                    $q->whereIn('name', $indications);
                });
            });

            $builder->when(!empty($technologies), function ($query) use ($technologies) {
                $query->whereHas('technologies', function ($q) use ($technologies) {
                    $q->whereIn('name', $technologies);
                });
            });

            $builder->when(!empty($impacts), function ($query) use ($impacts) {
                $query->whereHas('impacts', function ($q) use ($impacts) {
                    $q->whereIn('name', $impacts);
                });
            });

            $builder->when((bool) $isLatestJoined, function ($query) {
                $query->orderBy('created_at', 'desc');
            }, function ($query) {
                $query->orderBy('created_at', 'asc');
            });

            $builder->when((bool) $isOnSite, function ($query) {
                $query->where('is_on_site_at_bii', true);
            });

            $builder->when((bool) $isResidentCompany, function ($query) {
                $query->where('program_id', ProgramEnum::RESIDENCE->value);
            });

        })->paginate();
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

    /**
     * @param string $search
     * @param int $size
     * @param string $direction
     * @param string $sort
     * @param bool $isResidentCompany
     * @return LengthAwarePaginator
     */
    public static function getAllPaginatedCompanies(string $search, int $size, string $direction, string $sort, bool $isResidentCompany = false): LengthAwarePaginator
    {
        return self::search($search)
            ->query(function ($builder) use ($sort, $direction, $isResidentCompany) {
                $builder->with('program')
                    ->select('id', 'logo_path', 'name', 'country', 'program_id', 'onboarded_at')
                    ->orderBy($sort, $direction);

                $builder->when(!$isResidentCompany, function ($query) {
                    $query->where('program_id', '!=', ProgramEnum::RESIDENCE->value);
                });

                $builder->when($isResidentCompany, function ($query) {
                    $query->where('program_id', ProgramEnum::RESIDENCE->value);
                });
            })
            ->paginate($size);
    }
}
