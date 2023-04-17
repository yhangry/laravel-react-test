<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cuisine extends Model
{
    use HasFactory;

    protected $fillable = [
        'cuisine_id',
        'name',
        'slug',
    ];

    public function menus()
{
    return $this->hasMany(Menu::class);
}
}
