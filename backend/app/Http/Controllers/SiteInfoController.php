<?php

namespace App\Http\Controllers;

use App\Models\submissions;
use App\Models\agencies;
use Illuminate\Http\Request;

class SiteInfoController extends Controller
{
    public function getSiteInfo()
    {
        try {
            $siteInfo = [
                'submission_count' => submissions::count(),
                'agency_count' => agencies::count(),
                'resolved_count' => submissions::where('status', 'responded')->count(),
            ];
            return response()->json(['status' => 'success', 'data' => $siteInfo]);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }
}
