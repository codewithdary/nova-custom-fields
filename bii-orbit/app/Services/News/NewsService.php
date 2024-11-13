<?php

namespace App\Services\News;

use App\Enums\Platform\PlatformTypeEnum;
use App\Http\Requests\News\StoreNewsRequest;
use App\Models\News;
use App\Trait\Helpers\HandleFilePondUploadTrait;
use App\Trait\Helpers\RetrieveIdsTrait;
use App\Trait\InertiaErrorResponseTrait;
use Exception;
use Illuminate\Http\Request;

class NewsService
{
    use InertiaErrorResponseTrait, HandleFilePondUploadTrait, RetrieveIdsTrait;

    /**
     * @param Request $request
     * @return array
     */
    public function index(Request $request): array
    {
        return $this->getFilters($request);
    }

    /**
     * @param News $news
     * @return News
     */
    public function show(News $news): News
    {
        return $news->load('creator', 'contentTags');
    }

    /**
     * @param News $news
     * @return News
     */
    public function edit(News $news): News
    {
        return $news->load('contentTags');
    }

    /**
     * @param StoreNewsRequest $request
     * @param News $news
     * @return News
     */
    public function update(StoreNewsRequest $request, News $news): News
    {
        $path = $this->modifyFile($request, $news->image_path, config('filesystems.directories.avatars'));

        $news->update([
            "title" => $request->title,
            "excerpt" => $request->excerpt,
            "content" => $request->input("content"),
            "image_path" => $path ?? $news->image_path,
            "is_published" => (bool) $request->is_published,
        ]);

        $news->contentTags()->sync(self::getIdsFromList($request->content_tags));

        return $news;
    }

    /**
     * @param StoreNewsRequest $request
     * @return mixed
     */
    public function store(StoreNewsRequest $request): mixed
    {
        $path = $this->storeFile($request, "files", config("filesystems.directories.news"));

         $news = News::create([
             "platform_id" => PlatformTypeEnum::BII_ORBIT->value,
             "created_by_id" => auth()->id(),
             "title" => $request->title,
             "excerpt" => $request->excerpt,
             "content" => $request->input("content"),
             "image_path" => $path,
             "is_published" => $request->is_published,
             "original_image_name" => $request->file("files")->getClientOriginalName(),
        ]);

        $news->contentTags()->sync(self::getIdsFromList($request->content_tags));

        return $news;
    }
    /**
     * @param News $news
     * @return void
     */
    public function destroy(News $news): void
    {
        try {
            $news->delete();
        } catch (Exception $e) {
            $this->render(500);
        }
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getFilters(Request $request): array
    {
        return [
            'search' => $request->query('search', ''),
        ];
    }
}
