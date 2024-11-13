<?php

namespace App\Trait\Mail;

use App\Mail\CustomMail;
use App\Mail\Onboarding\OnboardingEmail;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

trait MailNotificationTrait
{
    /**
     * @param User $user
     * @param string $key
     * @param string $url
     * @return void
     */
    public static function createUserOnboardingMail(User $user, string $key, string $url): void
    {
        Mail::to($user->email)->send(new OnboardingEmail($user, $key, $url));
    }

    /**
     * @param string $to
     * @param string $title
     * @param string $message
     * @param bool $hasButton
     * @return void
     */
    public static function createCustomMail(string $to, string $title, string $message, bool $hasButton): void
    {
        Mail::to($to)->send(new CustomMail(
                $title,
                $message,
                $hasButton
            )
        );
    }
}
