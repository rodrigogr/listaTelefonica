<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    public $timestamp = true;
    protected $table = 'contatos';
    protected $fillable = ['nome','telefone'];
