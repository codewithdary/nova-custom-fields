<?php

namespace App\Traits\Event;
use DateTimeImmutable;
use Eluceo\iCal\Domain\Entity\Calendar;
use Eluceo\iCal\Domain\ValueObject\EmailAddress;
use Eluceo\iCal\Domain\ValueObject\Location;
use Eluceo\iCal\Domain\ValueObject\Organizer;
use Eluceo\iCal\Domain\ValueObject\TimeSpan;
use Eluceo\iCal\Domain\ValueObject\Uri;
use Eluceo\iCal\Domain\Entity\Event as EluceoEvent;
use Eluceo\iCal\Domain\ValueObject\DateTime;

trait EventExportTrait
{
    /**
     * @param $request
     * @return string
     */
    public function getCalendarFile($request): string
    {
        return preg_match('/macintosh|mac os x/i', $request)
        || preg_match('/ios/i', $request)
        || preg_match('/android/i', $request)
        || preg_match('/linux/i', $request)
            ? '.ics': '.vcs';
    }

    /**
     * @param $request
     * @return string
     */
    public function getCalendarExtensionBasedOnSelectedValue($request): string
    {
        return $request === 'iCalendar' ? '.ics' : '.vcs';
    }


    /**
     * @param $event
     * @return EluceoEvent
     */
    private function eventItem($event = null): EluceoEvent
    {
        return (new EluceoEvent())
            ->setSummary($event->title)
            ->setLocation(new Location(ucwords($event->location)))
            ->setUrl(new Uri($event->join_url ?: 'https://example.com'))
            ->setOrganizer(new Organizer(new EmailAddress($event->host_email), $event->host_name))
            ->setDescription("{$event->about} \n\n {$event->agenda_desc} \n {$event->join_url}")
            ->setOccurrence(new TimeSpan(
                new DateTime(DateTimeImmutable::createFromFormat('Y-m-d H:i:s', $event->date_start), false),
                new DateTime(DateTimeImmutable::createFromFormat('Y-m-d H:i:s', $event->date_end), false)
            ));
    }
    /**
     * @param $value
     * @return string[]
     */
    public function convertToArray($value): array
    {
        return is_string($value) ? explode(",", $value) : ["0"];
    }
}