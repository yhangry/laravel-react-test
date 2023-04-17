<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\Menu;
use App\Models\Cuisine;

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
        $menus = json_decode($response->body(), true);
        // var_dump($menus);

        foreach ($menus as $menu) {
            Cuisine::updateOrCreate(
                ['cuisine_id' => $menu['cuisine']['id']],
                ['name' => $menu['cuisine']['name']],
                ['slug' => $menu['cuisine']['slug']],
            );

            Menu::create([
                'name' => $menu['name'],
                'description' => $menu['description'],
                'image' => $menu['image'],
                'thumbnail' => $menu['thumbnail'],
                'price_per_person' => $menu['price_per_person'],
                'number_of_orders' => $menu['number_of_orders'],
                'cuisine_id' => $menu['cuisine']['id'],
            ]);
        }

        $this->info('Menus stored successfully!');
        return Command::SUCCESS;
    }
}
