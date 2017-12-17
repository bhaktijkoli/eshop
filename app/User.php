<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function createWith() {
      if(strlen($this->facebook) > 0) {
        return 'Facebook';
      }
      if(strlen($this->google) > 0) {
        return 'Google';
      }
      if(strlen($this->twitter) > 0) {
        return 'Twitter';
      }
      return "Developer";
    }
}