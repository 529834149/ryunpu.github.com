---
layout: post
title:  "Chrome extension snippets"
date:   2014-7-1
categories: Tool
---

###### Send message to background

```js
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'deleteCcookie'
});
```

###### Send message to content

```js
chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
        from: 'popup',
        subject: 'getSiteInfo'
    }, function(info) {
        console.log(info);
    });
});
```

###### AddListener

```js
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    if (msg.from === 'popup' && msg.subject === 'getSiteInfo') {
        response({
            site: 'weibo',
            user: 'moamaoa'
        });
    }
});
```

###### getActiveTab

```js
function getActiveTab(callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        callback(tabs[0]);
    });
}
```

###### tabs onUpdated

```js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tab)
});
```

###### get cookies

```js
chrome.cookies.get({
    name: 'un',
    url: 'weibo.com'
}, function(cookie) {
    console.log(cookie)
});
```

```js
chrome.cookies.getAll({
    url: 'weibo.com'
}, function(cookies) {
    console.log(cookies)
});
```

###### [chrome extensions](https://developer.chrome.com/extensions)
