<?php

namespace App\Console\Commands\Import;

use App\Client\DatabaseQueries;
use App\Models\CompanyTag;
use App\Models\ContentTag;
use Illuminate\Console\Command;

class CompanyTagImport extends Command
{
    /**
     * @var string
     */
    protected $signature = 'import:company-tags';

    /**
     * @var string
     */
    protected $description = 'Import company tags from the BII intranet';

    /**
     * @param DatabaseQueries $databaseQueries
     * @return void
     */
    public function handle(DatabaseQueries $databaseQueries): void
    {
        $tags = $databaseQueries->getCompanyTagsQuery();

        $bar = $this->output->createProgressBar(count($tags));

        $bar->start();

        foreach($tags as $tag) {
            CompanyTag::updateOrCreate(['id' => $tag->id], [
                'name' => $tag->name,
                'description' => $tag->description,
            ]);

            $bar->advance();
        }
        $this->info(__('import.company_tags'));

        $bar->finish();
    }
}
