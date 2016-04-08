---
layout: post
title:  "Bootstrap snippets and tips"
date:   2014-6-6
categories: JavaScript
---

###### update popover text:

```js
$('[data-toggle="popover"]').popover({
    html: true,
    trigger: 'focus',
    content: '',
    placement: 'bottom'
});

$('[data-toggle="popover"]').data('bs.popover').options.content = 'new content';
$('[data-toggle="popover"]').popover('show');
```

###### center modal dialog:

```css
.center-container.modal { padding: 0!important; text-align: center;}
.center-container.modal:before { content: ''; display: inline-block; margin-right: -4px; height: 100%; vertical-align: middle;}
.center-container.modal .modal-dialog { display: inline-block; text-align: left; vertical-align: middle;}
```