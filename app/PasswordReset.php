<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use App\User;
use Session;

class PasswordReset extends Model
{
  protected $table = 'password_resets';
  public $timestamps = false;

  public static function new(User $user) {
    $pr = new Self();
    $pr->userid = $user->id;
    $pr->tokenid = Self::generateNewID();
    $pr->token = str_random(50);
    $pr->save();
    return $pr;
  }

  public static function generateNewID() {
    $id = 1239781;
    $pr = Self::all()->last();
    if($pr) {
      return $pr->tokenid + 1;
    }
    return $id;
  }

  public static function init($tokenid, $token) {
    Session::put('resetpassword-id',$tokenid);
    Session::put('resetpassword-token',$token);
  }

  public static function changepassword($password) {
    $tokenid = Session::get('resetpassword-id');
    $token = Session::get('resetpassword-token');
    $pr = Self::where('tokenid',$tokenid)->first();
    if($pr) {
      if($pr->token == $token) {
        $user = User::where('id',$pr->userid)->first();
        $user->password = bcrypt($password);
        $user->save();
        $pr->forceDelete();
        return true;
      }
      $pr->times++;
      $pr->save();
    }
    return false;
  }

}
