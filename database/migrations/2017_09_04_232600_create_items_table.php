<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
  /**
  * Run the migrations.
  *
  * @return void
  */
  public function up()
  {
    Schema::create('items', function (Blueprint $table) {
      $table->increments('id');
      $table->integer('user_id');
      $table->string('title');
      $table->longtext('description');
      $table->string('category');
      $table->integer('price');
      $table->string('url');
      $table->enum('negotiable',['0','1'])->default('0');
      $table->enum("pending",[0,1])->default(0);
      $table->timestamps();
    });
  }

  /**
  * Reverse the migrations.
  *
  * @return void
  */
  public function down()
  {
    Schema::dropIfExists('items');
  }
}
