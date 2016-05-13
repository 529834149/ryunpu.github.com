---
layout: post
title:  "Live reloading Chrome extension with Gulp"
date:   2014-6-30
categories: Tool
---

###### gulpfile.js

`npm install ws --save-dev`

```js
gulp.watch(['build/**/*.{js,css,jpeg,png}'], ['reload']);

// send `reload` massage
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 9191 });

gulp.task('reload', function() {
    var client, i, len, ref, results;

    ref = wss.clients;
    results = [];

    for (i = 0, len = ref.length; i < len; i++) {
        client = ref[i];
        results.push(client.send('reload'));
    }

    return results;
});
```

###### content_scripts

```js
// send massage to background
var reloadSocket = new WebSocket('ws://localhost:9191');

reloadSocket.onopen = function() {
    console.log('connected');
};

reloadSocket.onmessage = function(massage) {
    if (massage.data === 'reload') {
        chrome.runtime.sendMessage('reload');
    }
};
```

###### background.js

```js
// reload extension
chrome.runtime.onMessage.addListener(function(massage) {
    if (massage === 'reload') {
        chrome.runtime.reload();
    }
});

// reload page
chrome.tabs.reload();
```
