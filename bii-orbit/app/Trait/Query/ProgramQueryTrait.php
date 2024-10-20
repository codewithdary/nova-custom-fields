<?php

namespace App\Trait\Query;

trait ProgramQueryTrait
{
    /**
     * @return mixed
     */
    public static function getLatestPrograms(): mixed
    {
        return self::latest()->get();
    }
}
