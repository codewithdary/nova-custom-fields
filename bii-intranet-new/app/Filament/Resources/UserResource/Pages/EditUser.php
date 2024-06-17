<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Filament\Actions\Action;
use Parallax\FilamentComments\Actions\CommentsAction;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CommentsAction::make(),

            Action::make('activities')
                ->icon('heroicon-o-clipboard-document-list')
                ->url(fn ($record) => UserResource::getUrl('activities', ['record' => $record])),

            Actions\DeleteAction::make(),
        ];
    }
}
