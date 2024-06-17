<?php

namespace App\Traits\User;


trait UserRoleTrait
{
    /**
     * @return mixed
     */
    public function isBiiAdmin(): mixed
    {
        return auth()->user()->hasRole(['admin']);
    }

    /**
     * @return mixed
     */
    public function isBiiUser(): mixed
    {
        return auth()->user()->hasRole(['admin', 'BII user', 'BII Anchor', 'BII Comms', 'deep_tech_lab_admin']);
    }

    /**
     * @return mixed
     */
    public function isBiiComms(): mixed
    {
        return auth()->user()->hasRole('BII Comms');
    }

    /**
     * @return mixed
     */
    public function isCoordinator(): mixed
    {
        return auth()->user()->hasRole('Coordinator');
    }
}