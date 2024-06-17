<?php

namespace App\Filament\Resources\RoleResource\RelationManagers;

use AmidEsfahani\FilamentTinyEditor\TinyEditor;
use App\Enums\User\UserGenderEnum;
use App\Models\User;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Actions\AttachAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Ysfkaya\FilamentPhoneInput\Forms\PhoneInput;

class UsersRelationManager extends RelationManager
{
    protected static string $relationship = 'users';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                    ->schema([
                        Section::make('General details')
                            ->schema([
                                TextInput::make('first_name')
                                    ->required(),

                                TextInput::make('last_name')
                                    ->required(),

                                TextInput::make('email')
                                    ->email()
                                    ->required(),

                                Select::make('gender')
                                    ->options([
                                        UserGenderEnum::FEMALE->value => UserGenderEnum::FEMALE->value,
                                        UserGenderEnum::MALE->value => UserGenderEnum::MALE->value,
                                        UserGenderEnum::FEMALE->value => UserGenderEnum::INTERSEX->value
                                    ])->required(),

                                TextInput::make('linkedin_url')
                                    ->label('LinkedIn URL')
                                    ->url(),

                                TextInput::make('Country')
                                    ->required(),

                                PhoneInput::make('phone_number')
                                    ->defaultCountry('dk')
                                    ->initialCountry('dk'),

                                TinyEditor::make('description')
                                    ->profile('default')
                                    ->columnSpanFull()
                                    ->required(),
                            ])->columns(2)
                    ])->columnSpan(3),

                Group::make()
                    ->schema([
                        Section::make('Relationships')
                            ->schema([
                                Select::make('roles')
                                    ->multiple()
                                    ->relationship(titleAttribute: 'name'),
                            ]),

                        Section::make('Visibility')
                            ->schema([
                                Toggle::make('is_onboarded')
                                    ->label('Onboarded')
                                    ->helperText('User is onboarding by joining an existing system company.')
                                    ->default(false)
                                    ->columnSpanFull(),

                                Toggle::make('terms_agreement')
                                    ->label('Terms & agreement')
                                    ->helperText('User has accepted the terms and agreement.')
                                    ->default(false)
                                    ->columnSpanFull(),

                                Placeholder::make('email_verified at')
                                    ->label('Verified at')
                                    ->content(function ($get) {
                                        $user = User::find($get('id'));
                                        return $user ? 'User is verified on ' . $user->email_verified_at . '.'  : 'User is not yet verified.';
                                    }),
                            ]),

                        Section::make('Avatar')
                            ->schema([
                                FileUpload::make('avatar_path')
                                    ->disk('do')
                                    ->directory('users/' . config('filesystems.disks.do.directory_env'))
                                    ->visibility('private')
                                    ->disableLabel()
                                    ->image()
                                    ->imageEditor()
                            ]),
                    ])->columnSpan(2),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('email')
            ->columns([
                TextColumn::make('first_name')
                    ->label('Name')
                    ->sortable(),

                TextColumn::make('email')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('companies.name')
                    ->label('Company'),

                TextColumn::make('created_at')
                    ->label('Joined on')
                    ->date()
                    ->sortable(),

                Tables\Columns\IconColumn::make('is_onboarded')
                    ->label('Onboarded')
                    ->sortable()
                    ->boolean(),
            ])
            ->filters([
//                SelectFilter::make('companies')
//                    ->label('Company')
//                    ->relationship('companies', 'name')
//                    ->options(Company::pluck('id', 'name')),

//                SelectFilter::make('cohorts')
//                    ->label('Cohort')
//                    ->relationship('companies.cohorts', 'name')
//                    ->options(Cohort::pluck('id', 'name')),

                TernaryFilter::make('is_onboarded')
                    ->label('Onboarded'),
            ])
            ->headerActions([
                Tables\Actions\AttachAction::make()
                    ->label('Attach user')
                    ->form(fn (AttachAction $action): array => [
                        $action->getRecordSelect()
                            ->multiple()
                            ->preload(),
                    ]),
            ])
            ->defaultSort('created_at', 'desc')
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DetachAction::make(),
                ])
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    //
                ]),
            ]);
    }
}
