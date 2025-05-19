<?php

namespace App\Http\Controllers;

use App\Mail\SubmissionUpdateMail;
use App\Models\submissions;
use App\Models\submissions_responses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

            Mail::to($submission->email)->send(new SubmissionUpdateMail([
                'sid' => $submission->sid,
                'status' => 'Responded',
                'agency' => $submission->agency->name,
                'response' => $request->message,
                'updated_at' => now()->format('Y-m-d H:i:s'),
                'created_at' => $submission->created_at->format('Y-m-d H:i:s')
            ]));

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
