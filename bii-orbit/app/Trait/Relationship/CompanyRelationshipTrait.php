<?php

namespace App\Trait\Relationship;

use App\Models\Category;
use App\Models\Cohort;
use App\Models\Impact;
use App\Models\Program;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait CompanyRelationshipTrait
{
    /**
     * @return BelongsToMany
     */
    public function cohorts(): BelongsToMany
    {
        return $this->belongsToMany(Cohort::class);
    }

    /**
     * @return BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * @return BelongsToMany
     */
    public function impacts(): BelongsToMany
    {
        return $this->belongsToMany(Impact::class);
    }

    /**
     * @return BelongsTo
     */
    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }

    /**
     * @return BelongsToMany
     */
    public function employees(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'employees');
    }

    /**
     * @return BelongsToMany
     */
    public function anchors(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'anchor_company');
    }
}
