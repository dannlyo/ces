<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubmissionUpdateMail extends Mailable
{
    use Queueable, SerializesModels;

    public $sid;
    public $status;
    public $agency;
    public $response;
    public $updated_at;
    public $created_at;

    /**
     * Create a new message instance.
     *
     * @param  array  $data
     * @return void
     */
    public function __construct(array $data)
    {
        $this->sid = $data['sid'];
        $this->status = $data['status'] ?? 'Under Review';
        $this->agency = $data['agency'] ?? 'Relevant Agency';
        $this->response = $data['response'] ?? null;
        $this->updated_at = $data['updated_at'] ?? now()->format('Y-m-d H:i:s');
        $this->created_at = $data['created_at'] ?? now()->format('Y-m-d H:i:s');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Submission Status Update - Citizen Connect',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.notify',
            with: [
                'sid' => $this->sid,
                'status' => $this->status,
                'agency' => $this->agency,
                'response' => $this->response,
                'updated_at' => $this->updated_at,
                'created_at' => $this->created_at,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}