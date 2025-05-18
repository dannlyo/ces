<?php

namespace App\Http\Controllers;

use App\Models\agencies;
use Illuminate\Http\Request;

class AgenciesController extends Controller
{
    public function index()
    {
        try{
            $agencies = agencies::latest()->get();
            return response()->json([
                'status' => 'success',
                'data' => $agencies
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
}
