<?php

namespace App\Trait\Query;

use App\Enums\Event\EventFormatEnum;
use App\Enums\Event\EvenTypeEnum;
use Carbon\Carbon;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

trait EventQueryTrait
{
    /**
     * @param string $search
     * @param bool|string|null $isCommunityEvent
     * @param bool|string|null $isProgramEvent
     * @param bool|string|null $isFacilityEvent
     * @param bool|string|null $hybrid
     * @param bool|string|null $online
     * @param bool|string|null $inPerson
     * @return LengthAwarePaginator
     */
    public static function getAllSearchedAndFilteredEvents(
        string $search,
        bool|null $isCommunityEvent = null,
        bool|null $isProgramEvent = null,
        bool|null $isFacilityEvent = null,
        bool|null $hybrid = null,
        bool|null $online = null,
        bool|null $inPerson = null
    ): LengthAwarePaginator
    {
        return self::search($search)->query(function ($builder) use ($isCommunityEvent, $isProgramEvent, $isFacilityEvent, $hybrid, $online, $inPerson) {
            $builder
                ->select('id', 'created_by_id', 'title', 'starts_at', 'location', 'host_id', 'type', 'format')
                ->with('host')
                ->where('is_synchronized', true);

            $builder->when(filter_var($isCommunityEvent, FILTER_VALIDATE_BOOLEAN), function ($query) {
                $query->where('type', EvenTypeEnum::COMMUNITY->value);
            });

            $builder->when(filter_var($isProgramEvent, FILTER_VALIDATE_BOOLEAN), function ($query) {
                $query->where('type', EvenTypeEnum::PROGRAM->value);
            });

            $builder->when(filter_var($isFacilityEvent, FILTER_VALIDATE_BOOLEAN), function ($query) {
                $query->where('type', EvenTypeEnum::FACILITY->value);
            });

            $builder->when(filter_var($hybrid, FILTER_VALIDATE_BOOLEAN), function ($query) {
                $query->where('format', EventFormatEnum::HYBRID->value);
            });

            $builder->when(filter_var($online, FILTER_VALIDATE_BOOLEAN), function ($query) {
                $query->where('format', EventFormatEnum::ONLINE->value);
            });

            $builder->when(filter_var($inPerson, FILTER_VALIDATE_BOOLEAN), function ($query) {
                $query->where('format', EventFormatEnum::IN_PERSON->value);
            });
        })
            ->orderBy('created_at', 'desc')
            ->paginate();
    }

    /**
     * @param int $number
     * @return mixed
     */
    public static function getLatestCommunityEvents(int $number): mixed
    {
        return self::where('type', EvenTypeEnum::COMMUNITY->value)
            ->select('id', 'created_by_id', 'title', 'starts_at', 'location', 'host_id', 'type')
            ->latest()
            ->take($number)
            ->get();
    }

    /**
     * @param int $number
     * @return mixed
     */
    public static function getLatestEvents(int $number): mixed
    {
        return self::where('starts_at', '>', Carbon::today())
            ->select('id', 'created_by_id', 'title', 'starts_at', 'location', 'host_id', 'type')
            ->orderBy('starts_at', 'asc')
            ->take($number)
            ->get();
    }
}
