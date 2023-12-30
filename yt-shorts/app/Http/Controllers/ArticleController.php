<?php

namespace App\Http\Controllers;

class ArticleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}
