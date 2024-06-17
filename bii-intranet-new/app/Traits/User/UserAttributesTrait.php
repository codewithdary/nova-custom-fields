<?php

namespace App\Traits\User;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

trait UserAttributesTrait
{
    /**
     * @return Attribute
     */
    public function FullAvatarPath(): Attribute
    {
        return Attribute::make(
            get: function () {
                return $this->avatar_path ?
                    Storage::disk('do')->url('users/' . config('filesystems.disks.do.directory_env') . '/' . $this->avatar_path) :
                    $this->avatar_path;
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
                return $this->first_name.' '.$this->last_name;
            }
        );
    }

    /**
     * @return Attribute
     */
//    public function cohorts(): Attribute
//    {
//        return Attribute::make(
//            get: function () {
//                return Cohort::whereHas('companies', function ($q) {
//                    $q->whereHas('users', function ($q) {
//                        if (auth()->user()) {
//                            $q->where('user_id', auth()->user()->id);
//                        }
//                    });
//                })->get();
//            }
//        );
//    }

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
