<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\ResponseBuilder;

use App\Http\Requests\RegisterRequest;

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
    return ResponseBuilder::send(true,"","/");
  }
}
