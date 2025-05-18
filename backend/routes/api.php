<?php

use App\Http\Controllers\AgenciesController;
use App\Http\Controllers\SubmissionsController;
use Illuminate\Support\Facades\Route;


Route::get('/agencies', [AgenciesController::class, 'index']);
Route::get('/submissions', [SubmissionsController::class, 'index']);
Route::post('/submissions', [SubmissionsController::class, 'store']);
Route::get('/submissions/{sid}', [SubmissionsController::class, 'show']);
Route::post('/submissions/{id}/respond', [SubmissionsController::class, 'respond']);