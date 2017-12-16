<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Item extends Model
{
  protected $table = 'items';
  protected $dates = ['created_at', 'updated_at'];


}
