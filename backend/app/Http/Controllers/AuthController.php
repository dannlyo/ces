<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'string', 'email'],
                'password' => ['required', 'string'],
            ]);

            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }

            // Revoke all existing tokens
            $user->tokens()->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'data' => [
                    'token' => $user->createToken('api-token')->plainTextToken,
                    'user' => $user->only(['id', 'name', 'email', 'role']),
                ],
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            Log::error('Login error: ' . $e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'Login failed',
                'error' => 'An unexpected error occurred',
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            // Delete the current token
            $request->user()->currentAccessToken()->delete();
            
            return response()->json([
                'status' => 'success',
                'message' => 'Logged out successfully',
            ]);
        } catch (\Exception $e) {
            Log::error('Logout error: ' . $e->getMessage());
            return response()->json([
                'status' => 'error',
                'message' => 'Logout failed',
                'error' => 'An unexpected error occurred',
            ], 500);
        }
    }
}
