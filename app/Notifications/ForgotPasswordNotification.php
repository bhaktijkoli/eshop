<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

use Mail;
use App\User;
use App\PasswordReset;
use App\Mail\ForgotPasswordMail;

class ForgotPasswordNotification extends Notification
{
  use Queueable;

  protected $user;
  protected $pr;

  /**
  * Create a new notification instance.
  *
  * @return void
  */
  public function __construct(User $user, PasswordReset $pr)
  {
    $this->user = $user;
    $this->pr = $pr;
  }

  /**
  * Get the notification's delivery channels.
  *
  * @param  mixed  $notifiable
  * @return array
  */
  public function via($notifiable)
  {
    return ['mail'];
  }

  /**
  * Get the mail representation of the notification.
  *
  * @param  mixed  $notifiable
  * @return \Illuminate\Notifications\Messages\MailMessage
  */
  public function toMail($notifiable)
  {
    $mail = new ForgotPasswordMail($this->user, $this->pr);
    $mail->to($notifiable->email);
    return $mail;
  }

  /**
  * Get the array representation of the notification.
  *
  * @param  mixed  $notifiable
  * @return array
  */
  public function toArray($notifiable)
  {
    return [
      //
    ];
  }
}
