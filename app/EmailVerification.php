<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use App\User;
use App\EmailVerification;

class EmailVerification extends Model
{
  protected $table = 'email_verifications';
  public $timestamps = false;

  public static function new(User $user, $email) {
    $ev = new Self();
    $ev->userid = $user->id;
    $ev->email = $email;
    $ev->tokenid = Self::generateNewID();
    $ev->token = str_random(50);
    $ev->save();
    return $ev;
  }

  public static function generateNewID() {
    $id = 1239781;
    $ev = Self::all()->last();
    if($ev) {
      return $ev->tokenid + 1;
    }
    return $id;
  }

  public static function verify($id, $token) {
    $ev = EmailVerification::where('tokenid',$id)->first();
    if($ev) {
      if($ev->token == $token) {
        $user = User::where('id',$ev->userid)->first();
        $user->email = $ev->email;
        $user->access = "1";
        $user->save();
        $ev->forceDelete();
        return $user;
      }
      $ev->times++;
      $ev->save();
    }
    return false;
  }

}
