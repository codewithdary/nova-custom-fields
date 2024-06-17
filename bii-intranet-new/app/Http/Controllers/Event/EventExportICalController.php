<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Traits\Event\EventExportTrait;
use Eluceo\iCal\Domain\Entity\Calendar;
use Eluceo\iCal\Presentation\Component;
use Eluceo\iCal\Presentation\Factory\CalendarFactory;
use Illuminate\Http\Request;

class EventExportICalController extends Controller
{
    use EventExportTrait;

    /**
     * @param Request $request
     * @return Component
     */
    public function __invoke(Request $request): Component
    {
        $events = Event::all();

        $eventObjects = [];
        foreach($events as $event) {
            $eventObjects[] = $this->eventItem($event);
        }

        $calendar = new Calendar($eventObjects);

        $iCalendarComponent = (new CalendarFactory())->createCalendar($calendar);

        header('Content-Type: text/calendar; charset=utf-8');
        header('Content-Disposition: attachment; filename="test.ics"');

        return $iCalendarComponent;
    }
}
