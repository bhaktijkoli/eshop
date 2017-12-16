<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Image;
use File;

class ItemImage extends Model
{
    protected $table = 'images';

    public static function newImage($file, $user_id, $item_id, $cover = 0) {
      if(!$file) {
        return false;
      }
      $image = new ItemImage();
      $image->user_id = $user_id;
      $image->item_id = $item_id;
      $image->cover = $cover;
      $image->uploadImage($file);
      $image->save();
      return true;
    }

    public function getUrl() {
      return url("public/images/" . $this->filename);
    }
    public function getThumb() {
      return url("public/images/thumb/" . $this->filename);
    }
    public function uploadImage($file) {
      $this->checkDirs();
      $filename = str_random(30) . uniqid() . '.' . 'jpg';
      $filepath = public_path('public\\images\\' .$filename);
      Image::make($file)->save( $filepath );
      $thumb = public_path('public\\images\\thumb\\' .$filename);
      Image::make($file)->resize(250, 150)->save($thumb);
      $this->filename = $filename;
    }
    public function deleteImage() {
      $filename = $this->$filename;
      $filepath = public_path('public\\images\\' .$filename);
      File::delete($filepath);
      $thumb = public_path('public\\images\\thumb\\' .$filename);
      File::delete($thumb);
    }
    public function checkDirs() {
      $path = public_path('public\\images');
      File::isDirectory($path) or File::makeDirectory($path, 0777, true, true);
      $path = public_path('public\\images\\thumb');
      File::isDirectory($path) or File::makeDirectory($path, 0777, true, true);
    }

}
