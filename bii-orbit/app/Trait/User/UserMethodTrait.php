<?php

namespace App\Trait\User;

use App\Models\Company;
use App\Notifications\ResetPasswordNotification;

trait UserMethodTrait
{
    /**
     * @param  string  $token
     */
    public function sendPasswordResetNotification($token): void
    {
        $this->notify(new ResetPasswordNotification($token, encrypt($this->email)));
    }

    /**
     * @return bool
     */
    public function hasVerifiedEmail(): bool
    {
        return ! is_null($this->email_verified_at);
    }

    /**
     * @return bool
     */
    public function isNotDeleted(): bool
    {
        return ! isset($this->deleted_at);
    }

    /**
     * @return bool
     */
    public function isOnboarded(): bool
    {
        return $this->hasVerifiedEmail()  && $this->is_onboarded && $this->terms_agreement;
    }

    /**
     * @return Company
     */
    public function getFirstAssociatedCompany(): Company
    {
        return $this->companies->first();
    }
}
