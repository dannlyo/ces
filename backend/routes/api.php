<?php

use App\Http\Controllers\AgenciesController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SubmissionsController;
use App\Http\Controllers\SubmissionsResponsesController;
use App\Http\Controllers\SiteInfoController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/submissions', [SubmissionsController::class, 'index']);
    Route::post('/submissions/respond', [SubmissionsResponsesController::class, 'respond']);
    Route::get('/dashboard', [DashboardController::class, 'index']);
});
Route::get('/submissions/track/{sid}', [SubmissionsController::class, 'show']);
Route::post('/submissions', [SubmissionsController::class, 'store']);
Route::get('/agencies', [AgenciesController::class, 'index']);

Route::get('/site-info', [SiteInfoController::class, 'getSiteInfo']);