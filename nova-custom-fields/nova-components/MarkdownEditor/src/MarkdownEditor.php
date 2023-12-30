<?php

namespace Codewithdary\MarkdownEditor;

use Laravel\Nova\Fields\Field;

class MarkdownEditor extends Field
{

    /**
     * @var bool
     */
    public $showOnIndex = false;

    /**
     * @var string
     */
    public $component = 'markdown-editor';
}
