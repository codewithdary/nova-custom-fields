<?php

namespace App\Trait\Attribute;

use App\Enums\Event\EventFormatEnum;
use App\Enums\Event\EvenTypeEnum;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait EventAttributesTrait
{
    /**
     * @return Attribute
     */
    public function humanDayStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('M', strtotime($this->starts_at))
        );
    }

    /**
     * @return Attribute
     */
    public function humanDayNumberStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('j', strtotime($this->starts_at))
        );
    }


    /**
     * @return Attribute
     */
    public function humanDateStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('d', strtotime($this->starts_at))
        );
    }

    /**
     * @return Attribute
     */
    public function humanFullDate(): Attribute
    {
        return Attribute::make(
            get: fn () => date('M jS, Y', strtotime($this->starts_at))
        );
    }

    /**
     * @return Attribute
     */
    public function humanStartTime(): Attribute
    {
        return Attribute::make(
            get: fn () => date('g:i', strtotime($this->starts_at))
        );
    }

    /**
     * @return Attribute
     */
    public function humanEndTime(): Attribute
    {
        return Attribute::make(
            get: fn () => date('g:i', strtotime($this->ends_at))
        );
    }

    /**
     * @return Attribute
     */
    public function start(): Attribute
    {
        return Attribute::make(
            get: fn () => date('Y-m-d', strtotime($this->starts_at))
        );
    }

    /**
     * @return Attribute
     */
    public function eventLocation(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->in_person ? __('general.onsight') : __('general.online')
        );
    }

    /**
     * @return Attribute
     */
    public function eventType(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->type === EvenTypeEnum::PROGRAM->value ? __('general.program_event') :
                ($this->type === EvenTypeEnum::COMMUNITY->value ?  __('general.community_event') :  __('general.facility_event'))
        );
    }

    /**
     * @return Attribute
     */
    public function timeRange(): Attribute
    {
        return Attribute::make(
            get: function () {
                $startsAtTime = Carbon::parse($this->starts_at)->format('H:i');
                $endsAtTime = Carbon::parse($this->ends_at)->format('H:i');

                return $startsAtTime . ' - ' . $endsAtTime;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function onlineSpotsLeft(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->max_number_of_participants_online - $this->participants_online_count
        );
    }

    /**
     * @return Attribute
     */
    public function inPersonSpotsLeft(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->max_number_of_participants_in_person - $this->participants_in_person_count
        );
    }

    /**
     * @return Attribute
     */
    public function userIsSignedUp(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->participants()->where('user_id', auth()->id())->exists()
        );
    }

    /**
     * @return Attribute
     */
    public function userSignedUpAs(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->participants()->where('user_id', auth()->id())->value('format') ?: ''
        );
    }

    /**
     * @return Attribute
     */
    public function isHybrid(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->format === EventFormatEnum::HYBRID->value
        );
    }

    /**
     * @return Attribute
     */
    public function isOnline(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->format === EventFormatEnum::ONLINE->value
        );
    }

    /**
     * @return Attribute
     */
    public function isInPerson(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->format === EventFormatEnum::IN_PERSON->value
        );
    }

    /**
     * @return Attribute
     */
    public function fullBannerPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->image_path && Storage::disk('s3')->exists($this->image_path)
                    ? Storage::disk('s3')
                        ->url($this->image_path)
                    : null;
            }
        );
    }
}
