---
layout: post
title:  "Laravel tips"
date:   2014-9-4
categories: Laravel
---

###### Route

```php
Route::get('components', function() {
    return view('home/components');
});
```

###### Displaying Data

```php
Route::get('/', function () {
    return view('welcome', [
        'user' => 'Peter',
        'info' => json_encode(array(
            'firstname' => "Peter",
            'lastname' => 'Griffin',
            'age' => '30'
        ))
    ]);
});
```

###### extends, yield and section

```php
@extends('home.layouts.app')

@yield('scripts')

@section('scripts')
    @parent
    <script></script>
@endsection
```

###### forelse

{% raw %}
```php
@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>没有用户</p>
@endforelse
```

###### X-CSRF-TOKEN

```js
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
    }
});

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf_token"]').getAttribute('content');
```

###### tinker

```bash
$ php artisan tinker

> factory(App\Todo::class, 20)->create()
```
