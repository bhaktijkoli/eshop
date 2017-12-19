<?php

/*
Flash Mesasge
Library by Bhaktij Koli (bhaktijkoli121@gmail.com)
*/

namespace App;

use Session;

class FlashMessage
{
  public static $sname = 'notification-messages';
  public static function make($type, $message) {
    $message = ['type'=>$type, 'message'=>$message];
    Session::push(Self::$sname,$message);
  }
  public static function getAll() {
    $messages = Session::get(Self::$sname);
    Session::forget(Self::$sname);
    return $messages;
  }
}
