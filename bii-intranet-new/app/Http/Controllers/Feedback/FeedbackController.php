<?php

namespace App\Http\Controllers\Feedback;

use App\Enums\Feedback\FeedbackEnum;
use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        Feedback::create([
            'url' => $request->url,
            'user_id' => auth()->id(),
            'description' => $request->description,
            'type' => $request->type === FeedbackEnum::FEEDBACK->value ? $request->type : FeedbackEnum::BUG->value,
        ]);


        return redirect()->back()->with('message', 'Your feedback has been received. We will respond as soon as possible');
    }
}
