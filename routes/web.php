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
Route::view('/register', 'index');

Route::get('/logout', 'Auth\Logincontroller@logout');
Route::get('/user/verify', 'Auth\RegisterController@verify');

Route::get('/login/{provider}', 'Auth\SocialLoginController@redirectToProvider');
Route::get('/login/{provider}/callback', 'Auth\SocialLoginController@handleProviderCallback');


Route::prefix('api')->group(function () {
  Route::get('/flash', function() { return FlashMessage::getAll();});
  Route::get('auth','UserController@getAuth');
  Route::get('get/categories','ItemController@getCategories');
  Route::post('/items/add','ItemController@add');
  Route::get('/items/get','ItemController@get');

  Route::post('/user/register','Auth\RegisterController@register');
  Route::post('/user/login','Auth\LoginController@login');
});

Route::get('/loginv/dev', function() {
  $user = App\User::where('facebook',null)->inRandomOrder()->first();
  Auth::login($user);
  return redirect()->route('home');
});
