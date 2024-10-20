<?php

namespace App\Trait\Relationship;

use App\Models\Company;
use App\Models\Endorsement;
use App\Models\Event;
use App\Models\Kth;
use App\Models\Skill;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait UserRelationshipTrait
{
    /**
     * @return mixed
     */
    public function events(): BelongsToMany
    {
        return $this->belongsToMany(Event::class);
    }

    /**
     * @return BelongsToMany
     */
    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }

    /**
     * @return BelongsToMany
     */
    public function companies(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'employees')
            ->withPivot('role_id', 'is_contactperson');
    }

    /**
     * @return BelongsToMany
     */
    public function kths(): BelongsToMany
    {
        return $this->belongsToMany(Kth::class);
    }

    /**
     * @return HasMany
     */
    public function endorsements(): HasMany
    {
        return $this->hasMany(Endorsement::class);
    }
}
