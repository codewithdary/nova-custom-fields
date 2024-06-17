<?php

namespace App\Http\Controllers\Event;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Traits\Event\EventExportTrait;
use Eluceo\iCal\Domain\Entity\Calendar;
use Eluceo\iCal\Presentation\Component;
use Eluceo\iCal\Presentation\Factory\CalendarFactory;
use Illuminate\Http\Request;

class EventExportController extends Controller
{
    use EventExportTrait;

    /**
     * @param Request $request
     * @param Event|null $event
     * @return Component
     */
    public function export(Request $request, Event $event = null): Component
    {
        $eventObject = $this->eventItem($event);

        $calendar = new Calendar([$eventObject]);
        $iCalendarComponent = (new CalendarFactory())->createCalendar($calendar);

        header('Content-Type: text/calendar; charset=utf-8');
        header('Content-Disposition: attachment; filename="'.$event->title . $this->getCalendarFile($request->server('HTTP_USER_AGENT')).'"');

        return $iCalendarComponent;
    }
}
