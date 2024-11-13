<?php

namespace App\Trait\Query;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

trait NewsQueryTrait
{
    /**
     * @param string|null $search
     * @param int|null $size
     * @param string|null $direction
     * @param string|null $sort
     * @return LengthAwarePaginator
     */
    public static function getAllSearchedAndFilteredNews(?string $search, ?int $size = 15, ?string $direction = 'desc', ?string $sort = 'id'): LengthAwarePaginator
    {
        return self::search($search)->query(function ($builder) {
            $builder->with('creator', 'contentTags');
        })
            ->orderBy($sort, $direction)
            ->paginate($size);
    }

    /**
     * @return mixed
     */
    public static function getLatestNews(): mixed
    {
        return self::with('creator', 'contentTags')
            ->select('id', 'created_by_id', 'platform_id', 'title', 'image_path', 'created_at')
            ->orderBy('created_at', 'desc')
            ->where('is_published', true)
            ->first();
    }

    /**
     * @param int $number
     * @return Collection
     */
    public static function getLatestNumberNews(int $number): Collection
    {
        return self::with('creator', 'contentTags')
            ->select('id', 'created_by_id', 'platform_id', 'title', 'image_path', 'created_at')
            ->orderBy('created_at', 'desc')
            ->where('is_published', true)
            ->skip(1)
            ->take($number)
            ->get();
    }
}
