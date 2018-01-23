<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests\UpdateEmailRequest;

use App\User;
use App\EmailVerification;
use App\ResponseBuilder;
use Auth;

use App\Notifications\RegisterNotification;

class UserController extends Controller
{
  public function getAuth() {
    $user = array();
    $user["check"] = 0;
    if(Auth::check()) {
      $user["check"] = 1;
      $user["name"] = Auth::user()->name;
      $user["email"] = Auth::user()->email;
      $user["avatar"] = User::validateAvatar(Auth::user()->avatar);
      $user['datetime'] = Auth::user()->created_at->format('M j, Y');
    }
    return $user;
  }
  public function updateEmail(UpdateEmailRequest $request) {
    $user = Auth::user();
    $user->email = $request->input('email');
    $ev = EmailVerification::new($user, $request->input('email'));
    $user->notify(new RegisterNotification($user, $ev));
    return ResponseBuilder::send(true,"A confirmation email will be sent to $user->email. Please check your inbox for instructions to validate your new email address.","");
  }
}
