<?php
namespace App\Traits\Event;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;

trait EventQueriesTrait
{
    /**
 * @return mixed
 */
    public function scopeActive(): mixed
    {
        return $this->where('status', 1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopePublished($query): mixed
    {
        if (! Auth::user()->isBiiUser()) {
            return $query->where('is_published', true);
        }

        return $query;
    }

    /**
     * @param string $column
     * @param string $direction
     * @param int|null $companyTag
     * @param int|null $contentTag
     * @param string|null $term
     * @return mixed
     */
    public static function getBiiEvents(string $column, string $direction, int $companyTag = null, int $contentTag = null, string $term = null): mixed
    {
        return self::search($term)->query(function ($builder) use ($column, $direction, $companyTag, $contentTag) {
            $builder->with(['host', 'contentTags', 'companyTags', 'documents'])
                ->select('events.*', 'events.date_start as start', 'events.date_end as end', 'events.title as event_title', 'events.is_all_day as allDay')
                ->orderBy($column, $direction)
                ->withCount('participants')
                ->whereHas('companyTags', function ($query) {
                    $query->whereIn('id', [23, 25]);
                })
                ->when($companyTag, function ($query) use ($companyTag) {
                    return $query->whereHas('companyTags', function ($q) use ($companyTag) {
                        $q->where('company_tag_id', $companyTag);
                    });
                })
                ->when($contentTag, function ($query) use ($contentTag) {
                    return $query->whereHas('contentTags', function ($q) use ($contentTag) {
                        $q->where('content_tag_id', $contentTag);
                    });
                })
                ->published();
        })->paginate(25);
    }

    /**
     * @param string $column
     * @param string $direction
     * @param int|null $companyTag
     * @param int|null $contentTag
     * @param string|null $term
     * @return mixed
     */
    public static function getUserEvents(string $column, string $direction, int $companyTag = null, int $contentTag = null, string $term = null): mixed
    {
        return self::search($term)->query(function ($builder) use ($column, $direction, $companyTag, $contentTag) {
            $builder->with(['host', 'contentTags', 'companyTags', 'documents'])
                ->select('events.*', 'events.date_start as start', 'events.date_end as end', 'events.title as event_title', 'events.is_all_day as allDay')
                ->orderBy($column, $direction)
                ->withCount('participants')
                ->whereHas('participants', function ($q) {
                    $q->where('user_id', Auth::id());
                })
                ->when($companyTag, function ($query) use ($companyTag) {
                    return $query->whereHas('companyTags', function ($q) use ($companyTag) {
                        $q->where('company_tag_id', $companyTag);
                    });
                })
                ->when($contentTag, function ($query) use ($contentTag) {
                    return $query->whereHas('contentTags', function ($q) use ($contentTag) {
                        $q->where('content_tag_id', $contentTag);
                    });
                })
                ->published();
        })->paginate(25);
    }

    /**
     * @param string $column
     * @param string $direction
     * @param int|null $companyTag
     * @param int|null $contentTag
     * @param string|null $term
     * @return LengthAwarePaginator
     */
    public static function getEventsWithRelationships(string $column, string $direction, int $companyTag = null, int $contentTag = null, string $term = null): LengthAwarePaginator
    {
        return self::search($term)->query(function ($builder) use ($column, $direction, $companyTag, $contentTag) {
            $builder->with(['host', 'contentTags', 'companyTags', 'documents'])
                ->select('events.*', 'events.date_start as start', 'events.date_end as end', 'events.title as event_title', 'events.is_all_day as allDay')
                ->orderBy($column, $direction)
                ->withCount('participants')
                ->when($companyTag, function ($query) use ($companyTag) {
                    return $query->whereHas('companyTags', function ($q) use ($companyTag) {
                        $q->where('company_tag_id', $companyTag);
                    });
                })
                ->when($contentTag, function ($query) use ($contentTag) {
                    return $query->whereHas('contentTags', function ($q) use ($contentTag) {
                        $q->where('content_tag_id', $contentTag);
                    });
                })
                ->published();
        })->paginate(25);
    }
}