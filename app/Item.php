<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use App\User;
use App\ItemImage;
use App\Category;

class Item extends Model
{
  protected $table = 'items';
  protected $dates = ['created_at', 'updated_at'];

  public function formatResponse()
  {
    $image = ItemImage::where("item_id",$this->id)->where("cover","1")->first();
    if($image) {
      $this->image = $image->getUrl();
      $this->thumb = $image->getThumb();
    }
    $this->category = Category::where("id",$this->category)->first()->name;
    $this['datetime'] = $this->created_at->diffForHumans();
    if(Favorite::where('user_id', User::getID())->where('item_id', $this->id)->first())
    $this['favorite'] = 1;
    else
    $this['favorite'] = 0;
  }

}
