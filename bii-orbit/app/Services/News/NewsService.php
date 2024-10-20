<?php

namespace App\Services\News;

use App\Models\News;
use Illuminate\Http\Request;

class NewsService
{
    /**
     * @param Request $request
     * @return array
     */
    public function index(Request $request): array
    {
        return $this->getFilters($request);
    }

    /**
     * @param News $news
     * @return News
     */
    public function show(News $news): News
    {
        return $news->load('creator', 'contentTags');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getFilters(Request $request): array
    {
        return [
            'search' => $request->query('search', ''),
            'contentTags' => $request->query('contentTags', []),
        ];
    }
}
