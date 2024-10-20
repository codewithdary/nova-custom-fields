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
}
