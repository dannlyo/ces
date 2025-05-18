<?php

namespace App\Http\Controllers;

use App\Models\submissions;
use App\Models\submissions_responses;
use Illuminate\Http\Request;

class SubmissionsResponsesController extends Controller
{
    public function respond(Request $request)
    {
        try {
            $request->validate([
                'message' => 'required',
                'submission_id' => 'required | exists:submissions,id',
            ]);

            $submission = submissions::find($request->submission_id);
            $respond = submissions_responses::create([
                'submission_id' => $submission->id,
                'response' => $request->message,
            ]);
            $submission->status = 'responded';
            $submission->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Submission responded successfully',
                'data' => submissions::with(['agency', 'response'])->find($submission->id),
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
