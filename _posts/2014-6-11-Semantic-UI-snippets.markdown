---
layout: post
title:  "Semantic UI snippets"
date:   2014-6-11
categories: CSS
---

<div class="sui-tag css-demo mb1" style="font-size: 1em;">tag</div>

```css
.sui-tag {
    position: relative;
    display: inline-block;
    margin: 0 .14285714em 0 1em;
    padding: .5833em 1.5em;
    font-size: .85714286rem;
    font-weight: 700;
    line-height: 1;
    color: rgba(0,0,0,.6);
    background-color: #e8e8e8;
    border-radius: 0 .28571429rem .28571429rem 0;
}

.sui-tag:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    width: 1.56em;
    height: 1.56em;
    background-color: inherit;
    transform: translateY(-50%) translateX(50%) rotate(-45deg);
}

.sui-tag:after {
    content: '';
    position: absolute;
    top: 50%;
    left: -.25em;
    width: .5em;
    height: .5em;
    margin-top: -.25em;
    background-color: #fff !important;
    border-radius: 500rem;
    box-shadow: 0 -1px 1px 0 rgba(0,0,0,.3);
}
```
