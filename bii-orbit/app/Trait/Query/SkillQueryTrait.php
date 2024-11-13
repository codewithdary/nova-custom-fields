<?php

namespace App\Trait\Query;

trait SkillQueryTrait
{
    /**
     * @return mixed
     */
    public static function getLatestSkills(): mixed
    {
        return self::oldest()->get();
    }

    /**
     * @return mixed
     */
    public static function getSkillNameAndIds(): mixed
    {
        return self::pluck('name', 'id');
    }
}
