<?php
namespace App\Traits\Event;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait EventAttributesTrait
{
    /**
     * @return Attribute
     */
    public function humanMonthStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('M', strtotime($this->date_start))
        );
    }

    /**
     * @return Attribute
     */
    public function humanDateStart(): Attribute
    {
        return Attribute::make(
            function() {
                $startDate = strtotime($this->date_start);
                $endDate = strtotime($this->date_end);

                $formattedStartDate = date('j F Y, H:i', $startDate);
                $formattedEndDate = date('H:i', $endDate);

                if(date('j F Y', $startDate) == date('j F Y', $endDate)) {
                    return $formattedStartDate . ' - ' . $formattedEndDate;
                } else {
                    return $formattedStartDate . ' - ' . date('j F Y, H:i', $endDate);
                }
            }
        );
    }

    /**
     * @return Attribute
     */
    public function humanDateStartFull(): Attribute
    {
        return Attribute::make(
            function() {
                return date('j F Y', strtotime($this->date_start));
            });
    }

    /**
     * @return Attribute
     */
    public function humanDayStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('j', strtotime($this->date_start))
        );
    }

    /**
     * @return Attribute
     */
    public function humanYearStart(): Attribute
    {
        return Attribute::make(
            get: fn () => date('y', strtotime($this->date_start))
        );
    }

    /**
     * @return Attribute
     */
    public function imagePath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->image ? Storage::disk('do')->url($this->image) : $this->image;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function isLoggedParticipant(): Attribute
    {
        return Attribute::make(
            get: function () {
                if (! auth()->user()) {
                    return false;
                }

                return $this->participants()->where('user_id', auth()->user()->id)->count();
            }
        );
    }
}