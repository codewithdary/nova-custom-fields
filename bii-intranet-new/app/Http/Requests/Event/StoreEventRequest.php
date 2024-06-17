<?php

namespace App\Http\Requests\Event;

use App\Enums\Event\EventFrequencyEnum;
use App\Enums\Event\EventTypeEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|max:255',
            'image' => 'sometimes',
            'type' => 'required', Rule::enum(EventTypeEnum::class),
            'date_start' => 'required|date',
            'date_end' => 'required_unless:is_all_day,true|date|after_or_equal:date_start',
            'time_start' => 'required_unless:is_all_day,true',
            'time_end' => 'required_unless:is_all_day,true|after:time_start',
            'host_name' => 'required',
            'host_email' => 'required',
            'frequency' => 'required', Rule::enum(EventFrequencyEnum::class),
            'location' => 'required',
            'join_url' => 'sometimes',
            'additional_info' => 'sometimes',
            'agenda_desc' => 'sometimes',
            'about' => 'sometimes',
            'is_all_day' => 'sometimes',
            'is_published' => 'sometimes',
            'is_informative' => 'sometimes',
        ];
    }

    public function messages(): array
    {
        return [
            'date_end.after' => 'The ending date cannot be before the starting date.',
            'time_end.after' => 'The ending time must be a time after the starting time.'
        ];
    }
}
