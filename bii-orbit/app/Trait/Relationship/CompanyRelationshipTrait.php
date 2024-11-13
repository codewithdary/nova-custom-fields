<?php

namespace App\Trait\Relationship;

use App\Models\Indication;
use App\Models\Technology;
use App\Models\Vertical;
use App\Models\Cohort;
use App\Models\DevelopmentStage;
use App\Models\File;
use App\Models\Folder;
use App\Models\Impact;
use App\Models\Program;
use App\Models\Stage;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
     * @return HasMany
     */
    public function folders(): HasMany
    {
        return $this->hasMany(Folder::class)
            ->whereNull('parent_id');
    }

    /**
     * @return HasMany
     */
    public function files(): HasMany
    {
        return $this->hasMany(File::class)
            ->whereNull('folder_id');
    }

    /**
     * @return BelongsTo
     */
    public function vertical(): BelongsTo
    {
        return $this->belongsTo(Vertical::class);
    }

    /**
     * @return BelongsToMany
     */
    public function impacts(): BelongsToMany
    {
        return $this->belongsToMany(Impact::class);
    }

    /**
     * @return BelongsToMany
     */
    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(Technology::class);
    }

    /**
     * @return BelongsToMany
     */
    public function indications(): BelongsToMany
    {
        return $this->belongsToMany(Indication::class);
    }

    /**
     * @return BelongsTo
     */
    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }

    /**
     * @return HasMany
     */
    public function employees(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
     * @return HasOne
     */
    public function firstEmployee(): HasOne
    {
        return $this->hasOne(User::class)
            ->orderBy('id');
    }

    /**
     * @return BelongsToMany
     */
    public function anchors(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'anchor_company');
    }

    /**
     * @return BelongsToMany
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * @return BelongsToMany
     */
    public function stages(): BelongsToMany
    {
        return $this->belongsToMany(Stage::class);
    }

    /**
     * @return BelongsTo
     */
    public function developmentStage(): BelongsTo
    {
        return $this->belongsTo(DevelopmentStage::class);
    }
}
