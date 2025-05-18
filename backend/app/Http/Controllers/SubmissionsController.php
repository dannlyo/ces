<?php

namespace App\Http\Controllers;

use App\Models\submissions;
use Illuminate\Http\Request;

class SubmissionsController extends Controller
{
    public function index()
    {
        try{
            $submissions = submissions::with(['agency', 'response'])->latest()->get();
            return response()->json([
                'status' => 'success',
                'data' => $submissions
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        try{
            $request->validate([
                'agency_id' => 'required|exists:agencies,id',
                'email' => 'required|email',
                'message' => 'required|string'
            ]);
            function generateSid() {
                $sid = 'SB-' . rand(1000,9999);
                while (submissions::where('sid', $sid)->exists()) {
                    $sid = 'SB-' . rand(1000,9999);
                }
                return $sid;
            }
            $sid = generateSid();
            $submission = submissions::create([
                'agency_id' => $request->agency_id,
                'email' => $request->email,
                'title' => $request->title,
                'sid' => $sid,
                'message' => $request->message
            ]);
            return response()->json([
                'status' => 'success',
                'message' => 'Submited successfully, Check your email to track your submission',
                'submission' => $submission
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show($sid)
    {
        try{
            $submission = submissions::with(['agency', 'response'])->where('sid', $sid)->first();
            return response()->json([
                'status' => 'success',
                'submission' => $submission
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function respond(Request $request, $id)
    {
        $submission = submissions::find($id);
        $submission->responses()->create([
            'response' => $request->response,
            'status' => 'responded'
        ]);
        return response()->json([
            'status' => 'success',
            'message' => 'Response created successfully',
            'submission' => $submission
        ]);
    }
    
}
