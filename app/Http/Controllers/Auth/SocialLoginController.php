<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use Socialite;
use Auth;

class SocialLoginController extends Controller
{
  public function __construct()
  {
    $this->middleware('guest');
  }
  private $services = ['facebook'];

  public function redirectToProvider($provider)
  {
    if(!in_array($provider, $this->services))
    {
      return $provider . " is not supported.";
    }
    return Socialite::driver($provider)->redirect();
  }

  public function handleProviderCallback($provider)
  {
    if(!in_array($provider, $this->services))
    {
      return $provider . " is not supported.";
    }
    $data = Socialite::driver($provider)->user();
    $user = User::where($provider, $data->getId())->first();
    if(!$user)
    {
      $user = User::where('email', $data->getEmail())->first();
      if($user) {
        $user->$provider = $data->getId();
        goto SaveAndLogin;
      }
      $user = new User();
      $user->$provider = $data->getId();
    }
    $user->name = $data->getName();
    $user->email = $data->getEmail();
    $user->avatar = $data->getAvatar();
    SaveAndLogin:
    $user->save();
    Auth::login($user);
    return redirect('/');
  }
}
