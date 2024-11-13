<?php

namespace App\Client;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class DatabaseQueries
{
    /**
     * @return Collection
     */
    public function getNewsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('news')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getFilesQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('file_storage_files')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getFoldersQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('file_storage_folders')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getArticlesQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('articles')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getArticleDocumentsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('article_documents')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getEmployeesQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('employees')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getParentFacilitiesQuery(): Collection
    {
        $ids = [8, 9, 16, 152, 160, 166, 7];
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('folders')
            ->whereIn('id', $ids)
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getFacilitiesChildrenQuery(): Collection
    {
        $ids = [8, 9, 16, 152, 160, 166, 7];
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('folders')
            ->whereIn('parent_id', $ids)
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getCollaboratorsQuery(): Collection
    {
        $ids = [123, 125, 126, 128, 129, 141, 140, 143, 149, 158, 164];

        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('articles')
            ->whereIn('folder_id', $ids)
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getTagsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('content_tags')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
public function getParticipantsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('event_participants')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getNewsTagsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('content_tag_news')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getEventsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('events')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getEventContentTagsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('content_tag_event')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getEventCompanyTagsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('company_tag_event')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getCompanyTagsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('company_tags')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getCompanyCohortQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('cohort_company')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getSkillsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('skills')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getCohortsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('cohorts')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getUserSkillsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('skill_user')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getProgramsQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('bii_programs')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getCompaniesQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('companies')
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    public function getServiceDomainsQuery(): Collection
    {
        $ids = [123, 125, 126, 128, 129, 141, 140, 143, 149, 158, 164];

        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('folders')
            ->whereIn('id', $ids)
            ->distinct()
            ->get();
    }

    /**
     * @return Collection
     */
    /**
     * @return Collection
     */
    public function getUsersQuery(): Collection
    {
        return DB::connection(env('DB_CONNECTION_NAME'))
            ->table('users')
            ->leftJoin('employees', 'users.id', '=', 'employees.user_id')
            ->select(
                'users.*',
                'employees.work_title as company_position',
                'employees.company_id as company_id'
            )
            ->distinct()
            ->groupBy('users.id', 'employees.work_title', 'employees.company_id')
            ->get();
    }
}
