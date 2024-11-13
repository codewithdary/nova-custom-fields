<?php

namespace App\Trait\Relationship;

use App\Models\Company;
use App\Models\Endorsement;
use App\Models\Event;
use App\Models\Kth;
use App\Models\Skill;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
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
     * @return mixed
     */
    public function upcomingEvents(): BelongsToMany
    {
        return $this->belongsToMany(Event::class)
            ->where('starts_at', '>', Carbon::today());
    }

    /**
     * @return BelongsToMany
     */
    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }

    /**
     * @return BelongsTo
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
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
