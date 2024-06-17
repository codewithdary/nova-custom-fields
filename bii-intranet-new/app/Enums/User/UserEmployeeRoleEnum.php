<?php

namespace App\Enums\User;

enum UserEmployeeRoleEnum : int
{
    case COMPANY_ADMIN = 2;

    case COMPANY_EMPLOYEE = 3;
}