<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Page1Controller;
use App\Http\Controllers\Page2Controller;

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

Route::get('/', function () {
    return view('welcome');
});

Route::resource('page1', Page1Controller::class);

Route::resource('page2', Page2Controller::class);
