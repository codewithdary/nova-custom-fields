<?php

namespace App\Http\Requests\Event;

use Illuminate\Foundation\Http\FormRequest;

class ExportEventRequest extends FormRequest
{

    /**
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return string[]
     */
    public function rules(): array
    {
        return [
            'date_start' => 'required',
            'date_end' => 'required',
            'calendar_type' => 'required',
            'content_tags' => 'sometimes',
            'company_tags' => 'sometimes',
        ];
    }
}
