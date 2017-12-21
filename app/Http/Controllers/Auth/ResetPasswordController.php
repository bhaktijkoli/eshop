<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotpasswordRequest;

use Auth;
use App\User;
use App\PasswordReset;
use App\ResponseBuilder;
use App\Notifications\ForgotPasswordNotification;


class ResetPasswordController extends Controller
{
  public function forgotpassword(ForgotpasswordRequest $request) {
    $email = $request->input("email");
    $user = User::where("email", $email)->first();
    if($user) {
      $pr = PasswordReset::new($user);
      $user->notify(new ForgotPasswordNotification($user, $pr));
    }
    return ResponseBuilder::send(true,"If your email address was registered, you will receive an email shortly with a link to reset your password.","");
  }
  public function resetpassword(Request $request) {
    $id = $request->input("id");
    $token = $request->input("token");
    PasswordReset::init($id, $token);
    return view('index');
  }
  public function newpassword(Request $request) {
    $password = $request->input("password");
    if(PasswordReset::changepassword($password)) {
      return ResponseBuilder::send(true,"Your password has been successfully changed.","");
    }
    return ResponseBuilder::send(false,"Your password reset session has expire.","");
  }
}
