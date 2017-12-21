<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\User;
use App\PasswordReset;

class ForgotPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subject = "Forgot Password";
    public $user;
    public $pr;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, PasswordReset $mail)
    {
        $this->user = $user;
        $this->pr = $mail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.forgotpassword');
    }
}
