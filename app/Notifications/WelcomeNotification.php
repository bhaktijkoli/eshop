<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

use Mail;
use App\User;
use App\Mail\WelcomeMail;

class WelcomeNotification extends Notification
{
  use Queueable;

  protected $user;

  /**
  * Create a new notification instance.
  *
  * @return void
  */
  public function __construct(User $user)
  {
    $this->user = $user;
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
    $mail = new WelcomeMail($this->user);
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
