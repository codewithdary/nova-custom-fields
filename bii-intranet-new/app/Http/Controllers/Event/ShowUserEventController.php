<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Models\CompanyTag;
use App\Models\ContentTag;
use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowUserEventController extends Controller
{
    /**
     * @var string|array|null
     */
    public string|null|array $column;

    /**
     * @var array|string|null
     */
    public null|array|string $direction;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->column = $request->query('column', 'id');
        $this->direction = $request->query('direction', 'desc');
    }

    /**
     * @param Request $request
     * @param User $user
     * @return Response
     */
    public function __invoke(Request $request, User $user): Response
    {
        $companyTag = CompanyTag::where('name', $request->query('company_tag'))->value('id');
        $contentTag = ContentTag::where('name', $request->query('content_tag'))->value('id');

        return Inertia::render('Event/Event', [
            'title' => 'Events',
            'current' => route('events.user.index'),
            'events' => Event::getUserEvents($this->column, $this->direction, $companyTag, $contentTag, $request->term),
            'createUrl' => route('events.create'),
            'contentTags' => ContentTag::pluck('name', 'id'),
            'companyTags' => CompanyTag::pluck('name', 'id'),
        ]);
    }
}
