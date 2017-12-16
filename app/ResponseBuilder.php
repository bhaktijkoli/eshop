<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Response;

class ResponseBuilder extends Model
{
  public static function send($success, $messages, $redirect)
  {
    $send = array();
    $send['success'] = $success;
    $send['redirect'] = $redirect;
    $send['messages'] = $messages;
    return Response::json($send);
  }
  public static function build($success, $messages, $redirect)
  {
    $send = array();
    $send['success'] = $success;
    $send['redirect'] = $redirect;
    $send['messages'] = $messages;
    return $send;
  }
  public static function status($message, $code) {
    return Response::json($message, $code);
  }
  public static function unauth() {
    return self::status('Unauthorized request',401);
  }
}
