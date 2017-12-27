<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
  protected $table = 'conversations';
  public $timestamps = true;

  public static function get($id1, $id2, $item_id) {
    $con = Conversation::where('user1',$id1)->where('item_id',$item_id)->first();
    if($con) return $con->cid;
    $con = Conversation::where('user2',$id1)->where('item_id',$item_id)->first();
    if($con) return $con->cid;
    return Self::new($id1, $id2, $item_id);
  }

  public static function new($id1, $id2, $item_id)
  {
    $con_id = Self::generateNewID();

    $con = new Conversation();
    $con->cid = $con_id;
    $con->user1 = $id1;
    $con->user2 = $id2;
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
