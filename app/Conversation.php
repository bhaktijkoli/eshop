<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
  protected $table = 'conversations';
  public $timestamps = true;

  public static function get($id1, $id2, $item_id) {
    $con = Conversation::where('user_id',$id1)->where('item_id',$item_id)->first();
    if($con) return $con->cid;
    return Self::new($id1, $id2, $item_1);
  }

  public static function new($id1, $id2, $item_id)
  {
    $con_id = Self::generateNewID();

    $con = new Conversation();
    $con->cid = $con_id;
    $con->user_id = $id1;
    $con->item_id = $item_id;
    $con->save();

    $con = new Conversation();
    $con->cid = $con_id;
    $con->user_id = $id2;
    $con->item_id = $item_id;
    $con->save();

    return $con_id;
  }
  public static function generateNewID()
  {
    $id = 1;
    $con = Self::all()->last();
    if($con) {
      return $con->cid + 1;
    }
    return $id;
  }

}
