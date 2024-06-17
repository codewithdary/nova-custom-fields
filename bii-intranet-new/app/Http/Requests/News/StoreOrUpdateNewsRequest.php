<?php

namespace App\Http\Requests\News;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrUpdateNewsRequest extends FormRequest
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
            'title' => 'required|min:10',
            'visibility' => 'required',
            'tags' => 'required',
            'content' => 'required|min:25',
            'image' => 'required',
            'is_published' => 'required',
            'is_synchronized' => 'sometimes',
        ];
    }

    /**
     * @return string[]
     */
    public function messages(): array
    {
        return [
            'is_published.required' => 'Please specify if the post is published or a draft.'
        ];
    }
}
