<?php

namespace App\Services\Community;

use App\Enums\Program\ProgramEnum;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyService
{
    /**
     * @param Request $request
     * @return array
     */
    public function index(Request $request): array
    {
        $programIds = array_map(
            fn($case) => $case->value,
            array_filter(ProgramEnum::cases(), fn($case) => $case !== ProgramEnum::RESIDENCE)
        );

        return [
            'filters' => $this->getFilters($request),
            'programIds' => $programIds,
        ];
    }

    /**
     * @param Company $company
     * @return Company
     */
    public function show(Company $company): Company
    {
        return $company->load('program', 'employees', 'cohorts', 'anchors', 'categories', 'impacts');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getFilters(Request $request): array
    {
        return [
            'search' => $request->query('search', ''),
            'categories' => $request->query('categories', []),
            'cohorts' => $request->query('cohorts', []),
            'impacts' => $request->query('impacts', []),
            'isLatestJoined' => $request->query('isLatestJoined', ''),
            'isOnSite' => $request->query('isOnSite', ''),
        ];
    }
}
