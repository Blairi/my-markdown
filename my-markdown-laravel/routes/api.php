<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MarkdownController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::get('validateUserToken', 'validateUserToken');
});

Route::get('/markdowns/user/{user}', [MarkdownController::class, 'index']);
Route::get('/markdowns/{markdown}', [MarkdownController::class, 'show']);

Route::middleware('auth:sanctum')->post('/markdowns', [MarkdownController::class, 'store']);
Route::middleware('auth:sanctum')->put('/markdowns/{markdown}', [MarkdownController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/markdowns/{markdown}', [MarkdownController::class, 'destroy']);
