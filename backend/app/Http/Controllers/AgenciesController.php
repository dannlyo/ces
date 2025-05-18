<?php

namespace App\Http\Controllers;

use App\Models\agencies;
use Illuminate\Http\Request;

class AgenciesController extends Controller
{
    public function index()
    {
        $agencies = agencies::all();
        return response()->json($agencies);
    }
    
}
