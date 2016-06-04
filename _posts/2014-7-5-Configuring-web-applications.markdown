---
layout: post
title:  "Configuring web applications"
date:   2014-7-5
categories: HTML
---

###### Sets whether a web application runs in full-screen mode

```html
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
```

###### Sets the style of the status bar for a web application

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

###### Enables or disables automatic detection of possible phone numbers in a webpage in Safari on iOS

```html
<meta name="format-detection" content="telephone=no">
```

###### Adding an Icon

```html
<link rel="apple-touch-icon" href="apple-touch-icon-iphone.png">
<link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
<link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">
<link rel="icon" sizes="192x192" href="nice-highres.png">
```

###### Setting a Startup Image

```html
<link rel="apple-touch-startup-image" href="/startup-image.png">
```

###### Setting the Launcher Title

```html
<meta name="apple-mobile-web-app-title" content="Kojitsu">
```

###### Linking to Native Apps

```html
<a href="tel:01234567890">Call Jim</a>
<a href="facetime:01234567890">Call using FaceTime</a>
<a href="facetime:hello@example.com">Call using FaceTime</a>
<a href="sms:">Launch Messages App</a>
<a href="sms:01234567890">Send an SMS</a>
<a href="http://maps.apple.com/?q=cupertino">Cupertino</a>
```

###### [Apple reference](https://developer.apple.com/library/mac/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), [vivijs](http://www.cnblogs.com/vivijs/p/3860903.html)
