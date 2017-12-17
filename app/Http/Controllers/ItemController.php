<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AddItemRequest;

use Auth;
use App\Item;
use App\ItemImage;
use App\Category;
use App\ResponseBuilder;

class ItemController extends Controller
{
  public function getCategories() {
    return Category::select("id","name")->get();
  }

  public function get(Request $request) {
    $category = $request->input('category',"-1");
    $search = $request->input('search',"");
    $query = Item::select("id","title","description","price","negotiable","category","url","created_at")->where("pending","0");
    $query = $query->where("title",'like',"%$search%");
    $items = $query->get();
    $items = Item::select("id","title","description","price","negotiable","category","url","created_at")->get();
    foreach ($items as &$item) {
      $image = ItemImage::where("item_id",$item->id)->where("cover","1")->first();
      if($image) {
        $item->image = $image->getUrl();
        $item->thumb = $image->getThumb();
      }
      $item->category = Category::where("id",$item->category)->first()->name;
      $item['datetime'] = $item->created_at->diffForHumans();
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
    $item->url = str_replace(' ', '-',$title) .'id='. uniqid() ;
    $item->save();

    ItemImage::newImage($request->image1,$item->user_id, $item->id,1);
    ItemImage::newImage($request->image2,$item->user_id, $item->id);
    ItemImage::newImage($request->image3,$item->user_id, $item->id);
    ItemImage::newImage($request->image4,$item->user_id, $item->id);

    return ResponseBuilder::send(true,'',route('home'));
    }
}