<?php
namespace App\Traits\News;

use App\Enums\News\NewsVisibilityEnum;
use App\Enums\UserRoleEnum;
use Illuminate\Support\Facades\Auth;

trait NewsQueriesTrait
{
    /**
     * @param $query
     * @param $news
     * @return mixed
     */
    public function scopeWithRelatedData($query, $news): mixed
    {
        return $query->whereHas('contentTags', function ($query) use ($news) {
            $query->whereIn('content_tags.id', $news->contentTags->pluck('id'));
        })->with('contentTags', 'movies', 'documents', 'author')->take(2);
    }

    /**
     * @param string|null $visibility
     * @param int|null $contentTagId
     * @return mixed
     */
    public static function getNewsWithAuthor(string $visibility = null, int $contentTagId = null): mixed
    {
        return self::with(['author', 'contentTags'])
            ->when($visibility, function ($query, $visibility) {
                return $query->where('visibility', $visibility);
            })
            ->when($contentTagId, function ($query) use ($contentTagId) {
                return $query->whereHas('contentTags', function ($q) use ($contentTagId) {
                    $q->where('id', $contentTagId);
                });
            })
            ->filterByVisibility()
            ->latest()
            ->paginate(35);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeFilterByVisibility($query): mixed
    {
        if (Auth::user()->isBiiUser()) {
            return $query->where('is_published', true)->whereIn('visibility', [
                NewsVisibilityEnum::EVERYONE->value,
                NewsVisibilityEnum::INTERNAL->value
            ]);
        }

        if (Auth::user()->hasRole(UserRoleEnum::BII_COMMS->value)) {
            return $query->where('is_published', true)->whereIn('visibility', [
                NewsVisibilityEnum::COMMUNITY->value,
                NewsVisibilityEnum::EVERYONE->value,
                NewsVisibilityEnum::INTERNAL->value
            ]);
        }

        return $query->where('visibility', NewsVisibilityEnum::EVERYONE->value);
    }
}