<?php

namespace App\Services\Community;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyService
{
    public function index(Request $request): array
    {
        $filters = $this->getFilters($request);

        $isResidenceRoute = request()->routeIs('communities.residents.index');
        $indexRoute = $isResidenceRoute ? route('communities.residents.index') : route('communities.companies.index');

        return array_merge($filters, [
            'isResidenceRoute' => $isResidenceRoute,
            'indexRoute' => $indexRoute,
        ]);
    }

    /**
     * @param Company $company
     * @return Company
     */
    public function show(Company $company): Company
    {
        return $company->load('program', 'employees', 'cohorts', 'anchors', 'vertical', 'technologies', 'indications', 'impacts', 'firstEmployee');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getFilters(Request $request): array
    {
        return [
            'search' => $request->query('search', ''),
            'verticals' => $request->query('verticals', []),
            'cohorts' => $request->query('cohorts', []),
            'impacts' => $request->query('impacts', []),
            'technologies' => $request->query('technologies', []),
            'indications' => $request->query('indications', []),
            'isLatestJoined' => $request->query('isLatestJoined', ''),
            'isOnSite' => $request->query('isOnSite', ''),
            'isResidentCompany' => $request->query('isResidentCompany', ''),
        ];
    }
}
