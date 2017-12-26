<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SendMessageRequest;

use Auth;
use App\Message;
use App\Conversation;
use App\ResponseBuilder;

class MessageController extends Controller
{
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
}
