<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CustomMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var string
     */
    public string $header;

    /**
     * @var string
     */
    public string $content;

    public bool $hasButton = false;
    /**
     * @return void
     */
    public function __construct(string $header, string $content, bool $hasButton)
    {
        $this->header = $header;
        $this->content = $content;
        $this->hasButton = $hasButton;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: __('mail.subject', [
                'subject' => $this->header,
                'appName' => config('app.name')
            ])
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.custom.index',
        );
    }
}
