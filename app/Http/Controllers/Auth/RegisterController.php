<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\EmailVerification;
use App\ResponseBuilder;

use FlashMessage;

use App\Http\Requests\RegisterRequest;

use App\Notifications\RegisterNotification;

class RegisterController extends Controller
{
  public function __construct()
  {
    $this->middleware('guest');
  }

  public function register(RegisterRequest $request)
  {
    $user = new User();
    $user->name = $request->input('fullname');
    $user->email = $request->input('email');
    $user->password = bcrypt($request->input('password'));
    $user->save();
    $ev = EmailVerification::new($user, $request->input('email'));
    $user->notify(new RegisterNotification($user, $ev));
    return ResponseBuilder::send(true,"Your registration was successfull, A confirmation e-mail will be sent to $user->email.","");
  }
  public function verify(Request $request)
  {
    $id = $request->input("id");
    $token = $request->input("token");
    if(EmailVerification::verify($id, $token)) {

    }
    return redirect()->route('home');
  }
}
