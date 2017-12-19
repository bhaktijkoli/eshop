<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Validator;
use Lang;
use App\ResponseBuilder;

class LoginController extends Controller
{
  /*
  |--------------------------------------------------------------------------
  | Login Controller
  |--------------------------------------------------------------------------
  |
  | This controller handles authenticating users for the application and
  | redirecting them to your home screen. The controller uses a trait
  | to conveniently provide its functionality to your applications.
  |
  */

  use AuthenticatesUsers;

  /**
  * Where to redirect users after login.
  *
  * @var string
  */
  protected $redirectTo = '/';

  /**
  * Create a new controller instance.
  *
  * @return void
  */
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }


  protected function validateLogin(Request $request)
  {
    $validator = Validator::make($request->all(), [
      $this->username()  => 'required|string',
      'password' => 'required|string',
    ]);

    if ($validator->fails()) {
      return $this->sendFailedLoginResponse($request);
    }
  }

  protected function authenticated(Request $request, $user)
  {
    return ResponseBuilder::send(true, "", "");
  }

  protected function sendFailedLoginResponse(Request $request)
  {
    return ResponseBuilder::send(false, trans('auth.failed'), "");
  }

  protected function sendLockoutResponse(Request $request)
  {
      $seconds = $this->limiter()->availableIn(
          $this->throttleKey($request)
      );

      return ResponseBuilder::send(false, trans('auth.throttle', ['seconds' => $seconds]) ,"");
  }
}
