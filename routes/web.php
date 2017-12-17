<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index')->name('home');
Route::view('/new-ad', 'index');
Route::view('/login', 'index');

Route::get('/logout', 'Auth\Logincontroller@logout');

Route::prefix('api')->group(function () {
    Route::get('auth','UserController@getAuth');
    Route::get('get/categories','ItemController@getCategories');
    Route::post('/items/add','ItemController@add');
    Route::get('/items/get','ItemController@get');
});

Route::get('/loginv/dev', function() {
  $user = App\User::where('facebook',null)->inRandomOrder()->first();
  Auth::login($user);
  return redirect()->route('home');
});
