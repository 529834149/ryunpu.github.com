---
layout: post
title:  "A Vue project gulpfile with laravel-elixir"
date:   2014-6-23
categories: Vue
comments: true
---

```js
var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');
require('laravel-elixir-vueify');
require('laravel-elixir-compress');

var production = elixir.config.production;
var vue = '../../node_modules/vue/dist/vue.js';
if (production) vue = '../../node_modules/vue/dist/vue.min.js';

elixir(function(mix) {
    mix
        .sass([
            'base.scss',
            'main.scss',
        ], 'public/css/main.css')

        .browserify('main.js', 'public/js/app.js')
        .browserify('pages/index.js', 'public/js/pages')

        .scripts([
            vue,
            '../../node_modules/vue-resource/dist/vue-resource.min.js',
            '../../node_modules/vue-router/dist/vue-router.min.js',
            'app.js',
        ], 'public/js/main.js', 'public/js')

        .version([
            'css/main.css',
            'js/main.js',
        ])

        .livereload();

    if (production) {
        mix.compress();
    }
});
```
