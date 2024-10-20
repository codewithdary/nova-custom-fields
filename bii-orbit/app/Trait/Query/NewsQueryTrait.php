<?php

namespace App\Trait\Query;


use Illuminate\Database\Eloquent\Collection;

trait NewsQueryTrait
{
    public static function getAllFilteredNews(array $contentTags): Collection|array
    {
        return self::with('creator', 'contentTags')
            ->orderBy('id', 'desc')
            ->when(!empty($contentTags), function ($query) use ($contentTags) {
                $query->whereHas('contentTags', function ($query) use ($contentTags) {
                    $query->whereIn('name', $contentTags);
                });
            })
            ->get();
    }

    /**
     * @param string $search
     * @return Collection
     */
    public static function getAllSearchedNews(string $search): Collection
    {
        return self::search($search)->query(function ($builder) {
            $builder
                ->with('creator', 'contentTags');
        })->oldest()->get();
    }

    /**
     * @return mixed
     */
    public static function getLatestNews(): mixed
    {
        return self::with('creator', 'contentTags')
            ->orderBy('created_at', 'desc')
            ->first();
    }

    /**
     * @param int $number
     * @return Collection
     */
    public static function getLatestNumberNews(int $number): Collection
    {
        return self::with('creator', 'contentTags')
            ->orderBy('created_at', 'desc')
            ->skip(1)
            ->take($number)
            ->get();
    }
}
