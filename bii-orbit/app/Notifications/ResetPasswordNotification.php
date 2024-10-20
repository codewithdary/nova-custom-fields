<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordNotification extends Notification
{
    use Queueable;

    /**
     * @var string
     */
    public string $token;

    /**
     * @var string
     */
    public string $email;

    /**
     * @return void
     */
    public function __construct(string $token, string $email)
    {
        $this->token = $token;
        $this->email = $email;
    }

    /**
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * @param  mixed  $notifiable
     * @return MailMessage
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->markdown('emails.auth.reset-password', [
                'token' => $this->token,
                'email' => $this->email
            ])
            ->subject(__('mail.reset_password') . ' - ' . config('app.name'));
    }
}
