<?php

namespace App\Trait\Attribute;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait UserAttributesTrait
{
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
    public function name(): Attribute
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
    public function pageUrl(): Attribute
    {
        return Attribute::make(
            get: function () {
                return route('communities.people.show', $this->id);
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
                return $this->company ? __('title.user_excerpt', [
                    'role' => $this->company_position,
                    'name' => $this->company->name, 'route' =>
                        route('communities.companies.show', $this->company->id)]) : __('title.excerpt_not_found'
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

    /**
     * @return Attribute
     */
    public function emailVerifiedAtHuman(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->email_verified_at !== null ? $this->email_verified_at->format('M jS, Y') : "-";
            }
        );
    }

    /**
     * @return Attribute
     */
    public function statusText(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->is_onboarded ? __('general.onboarded') : __('general.pending');
            }
        );
    }
}
