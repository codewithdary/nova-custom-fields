<?php
namespace App\Traits\News;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait NewsAttributesTrait
{
    /**
     * @return Attribute
     */
    public function imagePath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->image ? Storage::disk('do')
                    ->url($this->image) : $this->image;
            }
        );
    }

    /**
     * @return Attribute
     */
    public function createdAtHuman(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->created_at->format('M jS, Y');
            }
        );
    }
}