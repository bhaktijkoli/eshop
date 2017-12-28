<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Auth;

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
}
