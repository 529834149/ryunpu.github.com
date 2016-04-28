---
layout: post
title:  "Run conditional tasks with Laravel"
date:   2014-6-24
categories: Laravel
---

###### gulpfile

```js
var elixir = require('laravel-elixir');
require('laravel-elixir-compress');

elixir(function(mix) {
    mix
        .sass([
            'base.scss',
            'main.scss',
        ], 'public/css/main.css')

        .scripts([
            'base.js',
            'app.js',
        ], 'public/js/main.js', 'public/js')

        .version([
            'css/main.css',
            'js/main.js',
        ]);

    if (elixir.config.production) {
        mix.compress();
    }
});
```

###### template

```js
@if (Config::get('app.debug'))
    <script type="text/javascript">
        document.write('<script src="//localhost:35729/livereload.js?snipver=1"><\/script>');
    </script>
@endif
```
