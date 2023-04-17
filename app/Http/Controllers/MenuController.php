<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;
use App\Models\Cuisine;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        return response()->json($menus);
    }

    public function topMenus()
    {
        $cuisines = Cuisine::all();
        $menus = [];

        foreach ($cuisines as $cuisine) {
            $popularMenus = Menu::where('cuisine_id', $cuisine->cuisine_id)
                ->orderByDesc('number_of_orders')
                ->take(5)
                ->get();

        $menus = array_merge($menus, $popularMenus->toArray());
        }

        return response()->json($menus);
    }
}
