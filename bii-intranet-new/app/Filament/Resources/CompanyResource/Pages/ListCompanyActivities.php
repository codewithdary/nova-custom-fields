<?php

namespace App\Filament\Resources\CompanyResource\Pages;

use App\Filament\Resources\CompanyResource;
use pxlrbt\FilamentActivityLog\Pages\ListActivities;

class ListCompanyActivities extends ListActivities
{
    protected static string $resource = CompanyResource::class;

    protected function getHeaderActions(): array
    {
        return [
            //
        ];
    }
}
