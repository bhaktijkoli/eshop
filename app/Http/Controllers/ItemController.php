<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AddItemRequest;

use Auth;
use App\User;
use App\Item;
use App\ItemImage;
use App\Category;
use App\Favorite;
use App\ResponseBuilder;

class ItemController extends Controller
{
  public function getCategories() {
    return Category::select("id","name")->get();
  }

  public function get(Request $request) {
    $category = $request->input('category',"-1");
    $search = $request->input('search',"");
    $query = Item::select("id","title","description","price","negotiable","category","url","created_at")->where('pending','1');
    $query = $query->where("title",'like',"%$search%");
    $query = $category==-1?$query:$query->where('category',$category);
    $items = $query->get();
    // $items = Item::select("id","title","description","price","negotiable","category","url","created_at")->get();
    $no=1;
    foreach ($items as &$item) {
      $item->formatResponse();
    }
    return $items;
  }

  public function add(AddItemRequest $request) {
    $title = $request->input('title');
    $description = $request->input('description');
    $category = $request->input('category');
    $price = $request->input('price');
    $negotiable = $request->input('negotiable');
    $negotiable=='on'?$negotiable='1':$negotiable='0';

    $item = new Item();
    $item->user_id = Auth::user()->id;
    $item->title = $title;
    $item->description = $description;
    $item->description = $description;
    $item->category = $category;
    $item->price = $price;
    $item->negotiable = $negotiable;
    $item->url = str_replace(' ', '-',$title) .'-'. uniqid();
    $item->url = strtolower($item->url);
    $item->pending = '0';
    $item->save();

    ItemImage::newImage($request->image1,$item->user_id, $item->id,1);
    ItemImage::newImage($request->image2,$item->user_id, $item->id);
    ItemImage::newImage($request->image3,$item->user_id, $item->id);
    ItemImage::newImage($request->image4,$item->user_id, $item->id);

    return ResponseBuilder::send(true,'',route('home'));
  }

  public function getItem($url) {
    $item = Item::select("id",'user_id',"title","description","price","negotiable","category","url","created_at")->where('pending','1')->where('url',$url)->first();
    if(!$item) return "";
    $item->formatResponse();
    $imagesAll = ItemImage::where('item_id',$item->id)->get();
    $images = [];
    foreach ($imagesAll as $image) {
      array_push($images,$image->getUrl());
    }
    $item['images'] = $images;
    $user = User::select('name','email','avatar','created_at')->where('id',$item->user_id)->first();
    if(!$user) return "";
    $user['avatar'] = User::validateAvatar($user->avatar);
    $user['datetime'] = $user->created_at->format('M j, Y');
    $user['id'] = $item->user_id;
    $item['seller'] = $user;
    return $item;
  }

  public function getUserItems(Request $request) {
    $pending = $request->input('pending','1');
    $items = Item::select("id","title","description","price","negotiable","category","url","created_at")->where('pending', $pending)->where('user_id', Auth::user()->id)->get();
    $no=1;
    foreach ($items as &$item) {
      $item->formatResponse();
    }
    return $items;
  }
}
