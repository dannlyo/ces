<?php

namespace App\Http\Controllers;

use App\Models\submissions;
use App\Models\agencies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        try{
            $submissions = submissions::count();
            $agencies = agencies::count();
            $pendingSubmissions = submissions::where('status', 'pending')->count();
            $respondedSubmissions = submissions::where('status', 'responded')->count();
            $topAgencies = submissions::select('agency_id', DB::raw('COUNT(*) as total_submissions'))
                ->groupBy('agency_id')
                ->orderBy('total_submissions', 'desc')
                ->limit(5)
                ->get();
            $topAgencies = $topAgencies->map(function($agency) {
                $agency->name = agencies::find($agency->agency_id)->name;
                return $agency;
            });
            return response()->json([
                'status' => 'success',
                'data' => [
                    'submissions' => $submissions,
                    'agencies' => $agencies,
                    'pending_submissions' => $pendingSubmissions,
                    'responded_submissions' => $respondedSubmissions,
                    'top_agencies' => $topAgencies
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
