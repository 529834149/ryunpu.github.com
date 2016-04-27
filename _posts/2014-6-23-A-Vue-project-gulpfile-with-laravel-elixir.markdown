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

elixir(function(mix) {
    mix
        .sass([
            'base.scss',
            'main.scss',
        ], 'public/css/main.css')

        .browserify('main.js', 'public/js/app.js')
        .browserify('pages/index.js', 'public/js/pages')

        .scripts([
            '../../node_modules/vue/dist/vue.js',
            '../../node_modules/vue-resource/dist/vue-resource.min.js',
            '../../node_modules/vue-router/dist/vue-router.min.js',
            'app.js',
        ], 'public/js/main.js', 'public/js')

        .version([
            'css/main.css',
            'js/main.js',
        ])

        .compress()

        .livereload();
});
```
