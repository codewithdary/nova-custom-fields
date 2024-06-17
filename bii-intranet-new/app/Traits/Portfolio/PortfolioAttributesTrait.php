<?php

namespace App\Traits\Portfolio;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait PortfolioAttributesTrait
{
    /**
     * @return Attribute
     */
    public function FullImagePath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->image_path ?
                    Storage::disk('do')->url('portfolios/' . config('filesystems.disks.do.directory_env') . '/' . $this->image_path) :
                    $this->image_path;
            }
        );
    }
}
