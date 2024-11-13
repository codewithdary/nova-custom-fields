<?php

namespace App\Trait\Attribute;


use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait CompanyAttributesTrait
{
    /**
     * @return Attribute
     */
    public function fullLogoPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->logo_path && Storage::disk('s3')->exists($this->logo_path)
                    ? Storage::disk('s3')
                        ->url($this->logo_path)
                    : null;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function fullNonConfPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->non_conf_slide_deck_path && Storage::disk('s3')->exists($this->non_conf_slide_deck_path)
                    ? Storage::disk('s3')
                        ->url($this->non_conf_slide_deck_path)
                    : null;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function fullValuePropositionPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->value_proposition_image_path && Storage::disk('s3')->exists($this->value_proposition_image_path)
                    ? Storage::disk('s3')
                        ->url($this->value_proposition_image_path)
                    : null;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function fullKeyDataPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->key_data_image_path && Storage::disk('s3')->exists($this->key_data_image_path)
                    ? Storage::disk('s3')
                        ->url($this->key_data_image_path)
                    : null;
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
                return isset($this->onboarded_at) ? __('general.onboarded') : __('general.pending');
            }
        );
    }

    /**
     * @return Attribute
     */
    public function isOnboarded(): Attribute
    {
        return Attribute::make(
            get: function () {
                return isset($this->onboarded_at);
            }
        );
    }
}
