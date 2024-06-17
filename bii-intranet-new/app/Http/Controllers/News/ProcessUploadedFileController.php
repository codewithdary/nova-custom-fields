<?php

namespace App\Http\Controllers\News;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProcessUploadedFileController extends Controller
{
    /**
     * @param Request $request
     * @return bool|string
     */
    public function __invoke(Request $request): bool|string
    {
        $files = $request->allFiles();

        if (empty($files)) {
            abort(422, 'No files were uploaded.');
        }

        if (count($files) > 1) {
            abort(422, 'Only 1 file can be uploaded at a time.');
        }

        $requestKey = array_key_first($files);

        $file = is_array($request->input($requestKey))
            ? $request->file($requestKey)[0]
            : $request->file($requestKey);

        return $file->store(
            path: 'tmp/' . now()->timestamp . '-' . Str::random(20)
        );
    }
}
