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
}
