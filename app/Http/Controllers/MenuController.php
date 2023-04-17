<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;

class MenuController extends Controller
{
    public function index()
    {
        $menus = \App\Models\Menu::all();
        return Inertia::render('Menus', ['menus' => $menus]);
    }
}
