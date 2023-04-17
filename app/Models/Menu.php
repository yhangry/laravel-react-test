<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'thumbnail',
        'price_per_person',
        'number_of_orders',
        'cuisine_id',
        'cuisine_name',
    ];

}
