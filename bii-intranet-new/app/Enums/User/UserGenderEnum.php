<?php

namespace App\Enums\User;

enum UserGenderEnum : string
{
    case MALE = 'Male';

    case FEMALE = 'Female';

    case INTERSEX = 'Intersex';
}