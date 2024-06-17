<?php

namespace App\Http\Controllers\Event;

use App\Enums\Event\EventFrequencyEnum;
use App\Enums\Event\EventTypeEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\Event\StoreEventRequest;
use App\Models\CompanyTag;
use App\Models\ContentTag;
use App\Models\Event;
use App\Services\Events\EventsService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
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

    public function index(Request $request): Response
    {
        $companyTag = CompanyTag::where('name', $request->query('company_tag'))->value('id');
        $contentTag = ContentTag::where('name', $request->query('content_tag'))->value('id');

        return Inertia::render('Event/Event', [
            'title' => 'Events',
            'current' => route('events.index'),
            'events' => Event::getEventsWithRelationships($this->column, $this->direction, $companyTag, $contentTag, $request->term),
            'createUrl' => route('events.create'),
            'contentTags' => ContentTag::pluck('name', 'id'),
            'companyTags' => CompanyTag::pluck('name', 'id'),
        ]);
    }

    public function show(Event $event)
    {
        dd("SHOW");
    }

    public function edit(Event $event): Response
    {
        return Inertia::render('Event/EventEdit', [
            'title' => 'Edit event',
            'types' => EventTypeEnum::cases(),
            'frequency' => EventFrequencyEnum::cases(),
            'contentTags' => ContentTag::pluck('name', 'id'),
            'companyTags' => CompanyTag::pluck('name', 'id'),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Event/EventCreate', [
            'title' => 'New event',
            'types' => EventTypeEnum::cases(),
            'frequency' => EventFrequencyEnum::cases(),
            'contentTags' => ContentTag::pluck('name', 'id'),
            'companyTags' => CompanyTag::pluck('name', 'id'),
        ]);
    }

    public function store(StoreEventRequest $request, EventsService $eventsService): Response
    {
        $eventsService->store($request);

        session()->flash('message', 'Your event has been created successfully.');

        return Inertia::render('Event/Event', [
            'title' => 'News',
            'events' => Event::getEventsWithRelationships($column = "id", $direction = "desc"),
            'createUrl' => route('events.create'),
            'contentTags' => ContentTag::pluck('name', 'id'),
            'companyTags' => CompanyTag::pluck('name', 'id'),
        ]);
    }

    /**
     * @param Event $event
     */
    public function destroy(Event $event): void
    {
        try {
            $event->delete();
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }
    }
}
