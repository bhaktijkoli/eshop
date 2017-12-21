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
Route::view('/forgotpassword', 'index');

Route::get('/logout', 'Auth\Logincontroller@logout');
Route::get('/user/verify', 'Auth\RegisterController@verify');
Route::get('/user/resetpassword', 'Auth\ResetPasswordController@resetpassword');

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
  Route::post('/user/forgotpassword','Auth\ResetPasswordController@forgotpassword');
  Route::post('/user/resetpassword','Auth\ResetPasswordController@newpassword');
});

Route::get('/loginv/dev', function() {
  $user = App\User::where('facebook',null)->inRandomOrder()->first();
  Auth::login($user);
  return redirect()->route('home');
});
Route::get('/update', function(){
  chdir(base_path());
  $res = exec('git reset --hard 2>&1', $output);
  $res = $res . '<br />' . exec('git pull origin master 2>&1', $output);
  return $res;
});
