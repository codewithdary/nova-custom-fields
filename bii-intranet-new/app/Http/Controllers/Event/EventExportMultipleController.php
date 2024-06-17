<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Http\Requests\Event\ExportEventRequest;
use App\Models\Event;
use App\Models\User;
use App\Traits\Event\EventExportTrait;
use Eluceo\iCal\Domain\Entity\Calendar;
use Eluceo\iCal\Presentation\Component;
use Eluceo\iCal\Presentation\Factory\CalendarFactory;
use Illuminate\Support\Facades\Auth;

class EventExportMultipleController extends Controller
{
    use EventExportTrait;

    /**
     * @param ExportEventRequest $request
     * @return Component
     */
    public function __invoke(ExportEventRequest $request): Component
    {
        if($request->content_tags || $request->audience_tags) {
            $events = Event::with(['tags', 'contentTags'])
                ->whereHas('contentTags', function ($query) use ($request) {
                    $query->whereIn('id', array_values($request->content_tags));
                })->orWhereHas('tags', function ($query) use ($request) {
                    $query->whereIn('id', array_values($request->audience_tags));
                })->whereBetween('date_start', [$request->date_start, $request->date_end])->get();
        } else {
            $events = Event::whereBetween('date_start', [$request->date_start, $request->date_end])->get();
        }

        $eventObjects = [];
        foreach($events as $event) {
            $eventObjects[] = $this->eventItem($event);
        }

        // Add user to exported events
        $participant = User::find(Auth::id());
        $participant->events()->sync($events->pluck('id')->toArray());

        $calendar = new Calendar($eventObjects);
        $iCalendarComponent = (new CalendarFactory())->createCalendar($calendar);

        header('Content-Type: text/calendar; charset=utf-8');
        header('Content-Disposition: attachment; filename="'. $request->date_start . $this->getCalendarExtensionBasedOnSelectedValue($request->calendar_type) .'"');

        return $iCalendarComponent;
    }
}
