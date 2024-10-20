<?php

namespace App\Trait\Relationship;

use App\Models\ContentTag;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait NewsRelationshipTrait
{
    /**
     * @return BelongsTo
     */
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }

    /**
     * @return BelongsToMany
     */
    public function contentTags(): BelongsToMany
    {
        return $this->belongsToMany(ContentTag::class);
    }
}
