<?php

namespace App\Http\Controllers\News;

use App\Enums\News\NewsVisibilityEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\News\StoreOrUpdateNewsRequest;
use App\Models\ContentTag;
use App\Models\News;
use App\Services\News\NewsService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    /**
     * @var string|array|null
     */
    public string|null|array $visibility;

    /**
     * @var array|string|null
     */
    public null|array|string $contentTagId;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->visibility = $request->query('visibility');
        $this->contentTagId = ContentTag::where('name', $request->query('content_tag'))->value('id');
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render(
            'News/News', [
                'title' => 'News',
                'current' => route('news.index'),
                'articles' => News::getNewsWithAuthor($this->visibility, $this->contentTagId),
                'createUrl' => route('news.create'),
                'visibilities' => $this->getVisibilityOptions(),
                'contentTags' => ContentTag::pluck('name', 'id'),
            ]
        );
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('News/NewsCreate', [
            'title' => 'New news',
            'visibilities' => $this->getVisibilityOptions(),
            'contentTags' => ContentTag::pluck('name', 'id'),
        ]);
    }

    /**
     * @param StoreOrUpdateNewsRequest $request
     * @param NewsService $newsService
     * @return Response
     */
    public function store(StoreOrUpdateNewsRequest $request, NewsService $newsService): Response
    {
        $newsService->create($request);

        session()->flash('message', 'Your news has been created successfully.');

        return Inertia::render('News/News', [
            'title' => 'News',
            'articles' => News::getNewsWithAuthor($this->visibility, $this->contentTagId),
            'createUrl' => route('news.create'),
            'visibilities' => $this->getVisibilityOptions(),
            'contentTags' => ContentTag::pluck('name', 'id'),
        ]);
    }

    /**
     * @param News $news
     * @param NewsService $newsService
     * @return Response
     */
    public function show(News $news, NewsService $newsService): Response
    {
        $newsService->show($news);

        $news->load('contentTags', 'movies', 'documents', 'author');

        return Inertia::render(
            'News/NewsDetail', [
                'article' => $news,
                'title' => $news->title,
                'related' => News::withRelatedData($news)->get()
            ]
        );
    }

    /**
     * @param News $news
     * @return Response
     */
    public function edit(News $news): Response
    {
        return Inertia::render(
            'News/NewsEdit', [
                'news' => $news,
                'title' => 'Edit news',
                'selectedContentTags' => $news->contentTags()->pluck('name', 'id'),
                'visibilities' => $this->getVisibilityOptions(),
                'contentTags' => ContentTag::pluck('name', 'id'),
            ]
        );
    }

    /**
     * @param StoreOrUpdateNewsRequest $request
     * @param NewsService $newsService
     * @param News $news
     * @return RedirectResponse
     */
    public function update(StoreOrUpdateNewsRequest $request, NewsService $newsService, News $news): RedirectResponse
    {
        $newsService->update($request, $news);

        return redirect()
            ->route('news.show', $news)
            ->with('message', 'Your news has successfully been updated.');
    }

    /**
     * @param News $news
     * @return RedirectResponse
     */
    public function destroy(News $news): RedirectResponse
    {
        $news->delete();

        return redirect()->back();
    }

    /**
     * @return array
     */
    public function getVisibilityOptions(): array
    {
        return Auth::user()->isBiiComms() ?
            NewsVisibilityEnum::cases()
         : [NewsVisibilityEnum::INTERNAL, NewsVisibilityEnum::EVERYONE];
    }
}
