<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('category', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name')->unique();
          $table->integer('added_by')->default(0);
          $table->timestamps();
      });

      $categories = ['Books','Kits','Instruments'];
      foreach ($categories as $value)
      {
        DB::table('category')->insert([
          'name' => $value,
          'created_at' => date("Y-m-d H:i:s"),
          'updated_at' => date("Y-m-d H:i:s"),
        ]);
      }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category');
    }
}
