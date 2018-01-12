<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Item;
use App\ItemImage;
use App\Favorite;
use App\Category;
use App\ResponseBuilder;
use Auth;

class FavoriteController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth');
  }
  public function toggle(Request $request)
  {
    $item_id = $request->input('id');
    $fav = Favorite::where('user_id',Auth::user()->id)->where('item_id', $item_id)->first();
    if($fav) {
      $fav->forceDelete();
    } else {
      $fav = new Favorite();
      $fav->item_id = $item_id;
      $fav->user_id = Auth::user()->id;
      $fav->save();
    }
    return ResponseBuilder::send(true,'','');
  }
  public function get()
  {
    $favs = Favorite::where('user_id',Auth::user()->id)->get();
    $no = 0;
    $items = [];
    foreach ($favs as $fav) {
      $item = Item::where('id',$fav->item_id)->first();
      $image = ItemImage::where("item_id",$item->id)->where("cover","1")->first();
      if($image) {
        $item->image = $image->getUrl();
        $item->thumb = $image->getThumb();
      }
      $item->category = Category::where("id",$item->category)->first()->name;
      $item['datetime'] = $item->created_at->diffForHumans();
      array_push($items, $item);
    }
    return $items;
  }
}
