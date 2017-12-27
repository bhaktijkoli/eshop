<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SendMessageRequest;

use Auth;
use App\User;
use App\Item;
use App\Message;
use App\Conversation;
use App\ResponseBuilder;

class MessageController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth');
  }
  public function sendMessage(SendMessageRequest $request)
  {
    $seller_id = $request->input('seller_id');
    $item_id = $request->input('item_id');
    $body = $request->input('message');
    $cid = Conversation::get(Auth::user()->id, $seller_id, $item_id);
    $message = new Message();
    $message->cid = $cid;
    $message->sender_id = Auth::user()->id;
    $message->receiver_id = $seller_id;
    $message->message = $body;
    $message->save();
    return ResponseBuilder::send(true,'','');
  }
  public function getCoversations()
  {
    $list = [];
    $conversations = Conversation::where('user1',Auth::user()->id)->orWhere('user2',Auth::user()->id)->get();
    foreach ($conversations as $con) {
      if($con->user1 == Auth::user()->id)
      {
        $newid = $con->user2;
        $type = "Seller";
      }
      else {
        $newid = $con->user1;
        $type = "Buyer";
      }
      $user = User::where('id',$newid)->first();
      if(!$user) continue;
      $el['name'] = $user->name;
      $item = Item::where('id',$con->item_id)->first();
      if(!$item) continue;
      $el['item'] = $item->title;
      $el['type'] = $type;
      $lastMessage = Message::where('cid',$con->cid)->get()->last();
      if($lastMessage) {
        $el['lastname'] = $lastMessage->sender_id == $newid?$user->name:'You';
        $el['lastmessage'] = $lastMessage->message;
        $el['datetime'] = $lastMessage->created_at->diffForHumans();
      }else {
        $el['lastname'] = "";
        $el['lastmessage'] = "";
        $el['datetime'] = "";
      }
      $unreadMessages = Message::where('cid',$con->id)->where('read',0)->count();
      $el['unread'] = $unreadMessages;
      array_push($list, $el);
    }
    return $list;
  }
}
