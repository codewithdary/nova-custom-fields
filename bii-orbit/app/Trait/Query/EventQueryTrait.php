<?php

namespace App\Trait\Query;


use App\Enums\Event\EvenTypeEnum;

trait EventQueryTrait
{
    /**
     * @param int $number
     * @return mixed
     */
    public static function getLatestCommunityEvents(int $number): mixed
    {
        return self::where('type', EvenTypeEnum::COMMUNITY->value)
            ->latest()
            ->take($number)
            ->get();
    }
}
