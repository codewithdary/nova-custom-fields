<?php

namespace App\Trait\Attribute;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait NewsAttributesTrait
{
    /**
     * @return Attribute
     */
    public function fullImagePath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->image_path ? Storage::disk('s3')
                    ->url($this->image_path) : Storage::disk('s3')->url('bii-cover.png');
            }
        );
    }

    /**
     * @return Attribute
     */
    public function humanDate(): Attribute
    {
        return Attribute::make(
            get: fn () => date('M j, Y', strtotime($this->created_at))
        );
    }
}
