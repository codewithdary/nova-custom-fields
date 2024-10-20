<?php

namespace App\Trait\Mail;

use App\Mail\CustomMail;
use Illuminate\Support\Facades\Mail;

trait MailNotificationTrait
{
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
