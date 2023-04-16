<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Menu;

class updateMenus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    // storeMC: store menus and cuisines
    protected $signature = 'store:menus';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Store menus from mock API into menus table.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $response = Http::get('https://staging.yhangry.com/booking/test/set-menus');
        $menuData = json_decode($response->body(), true);
        // var_dump($menuData);


        $this->info("outpost");
        return Command::SUCCESS;
    }
}
