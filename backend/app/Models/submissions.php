<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class submissions extends Model
{
    protected $fillable = ['agency_id', 'email', 'title', 'sid', 'status', 'message'];

    public function agency()
    {
        return $this->belongsTo(agencies::class);
    }

    public function response()
    {
        return $this->hasOne(submissions_responses::class, 'submission_id', 'id');
    }
}
