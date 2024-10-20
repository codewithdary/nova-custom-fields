<?php

namespace App\Trait\Relationship;

use App\Models\CompanyTag;
use App\Models\ContentTag;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait EventRelationshipTrait
{
    /**
     * @return BelongsToMany
     */
    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * @return BelongsToMany
     */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(CompanyTag::class);
    }

    /**
     * @return mixed
     */
    public function contentTags(): BelongsToMany
    {
        return $this->belongsToMany(ContentTag::class);
    }

    /**
     * @return mixed
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }

    /**
     * @return mixed
     */
    public function host(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
