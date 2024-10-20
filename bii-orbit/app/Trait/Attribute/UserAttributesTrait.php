<?php

namespace App\Trait\Attribute;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait UserAttributesTrait
{
    /**
     * @return Attribute
     */
    public function firstCompany(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->companies->first();
            }
        );
    }

    /**
     * @return Attribute
     */
    public function fullName(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->firstname . ' ' . $this->lastname;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function excerpt(): Attribute
    {
        return Attribute::make(
            get: function () {
                $company = $this->companies()->first();

                return $company ? __('title.user_excerpt', [
                    'role' => $this->company_position,
                    'name' => $company->name, 'route' =>
                        route('communities.companies.show', $company->id)]) : __('title.excerpt_not_found'
                );
            }
        );
    }

    /**
     * @return Attribute
     */
    public function fullAvatarPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->avatar_path && Storage::disk('s3')->exists($this->avatar_path)
                    ? Storage::disk('s3')
                        ->url($this->avatar_path)
                    : null;
            }
        );
    }
}
