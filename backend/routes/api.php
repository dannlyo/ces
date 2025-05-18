<?php

use App\Http\Controllers\AgenciesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SubmissionsController;
use App\Http\Controllers\SubmissionsResponsesController;
use Illuminate\Support\Facades\Route;


Route::get('/agencies', [AgenciesController::class, 'index']);
Route::get('/submissions', [SubmissionsController::class, 'index']);
Route::post('/submissions', [SubmissionsController::class, 'store']);
Route::get('/submissions/track/{sid}', [SubmissionsController::class, 'show']);
Route::post('/submissions/respond', [SubmissionsResponsesController::class, 'respond']);
Route::get('/dashboard', [DashboardController::class, 'index']);