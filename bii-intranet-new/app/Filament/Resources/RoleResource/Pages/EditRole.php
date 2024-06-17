<?php

namespace App\Filament\Resources\RoleResource\Pages;

use App\Filament\Resources\RoleResource;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;

class EditRole extends EditRecord
{
    protected static string $resource = RoleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('activities')
                ->icon('heroicon-o-clipboard-document-list')
                ->url(fn ($record) => RoleResource::getUrl('activities', ['record' => $record])),

            Actions\DeleteAction::make(),
        ];
    }
}
