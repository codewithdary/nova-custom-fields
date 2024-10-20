<?php

namespace App\Trait\Attribute;

use App\Enums\Event\EvenTypeEnum;
use Illuminate\Database\Eloquent\Casts\Attribute;

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
    public function humanDateStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('j', strtotime($this->starts_at))
        );
    }

    /**
     * @return Attribute
     */
    public function humanFullDate(): Attribute
    {
        return Attribute::make(
            get: fn () => date('M jS, Y', strtotime($this->created_at))
        );
    }

    /**
     * @return Attribute
     */
    public function humanStartTime(): Attribute
    {
        return Attribute::make(
            get: fn () => date('g:i', strtotime($this->created_at))
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
            get: fn () => $this->type === EvenTypeEnum::PROGRAM->value ? __('general.program_event') : __('general.community_event')
        );
    }
}
