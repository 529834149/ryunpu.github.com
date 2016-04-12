---
layout: post
title:  "CSS transform and animation"
date:   2014-6-2
categories: CSS
---

<div class="css-demo-1"><span></span><span></span><span></span></div>

```css
.css-demo-1 { position: relative; width: 25px; height: 35px; cursor: pointer;}
.css-demo-1 span { position: absolute; left: 0; top: 7px; width: 100%; height: 2px; background: #444; transition: all .2s; transform-origin: right center;}
.css-demo-1 span:nth-child(2) { top: 16px;}
.css-demo-1 span:last-child { top: 25px;}
.css-demo-1:hover span:first-child { transform: rotate(-45deg);}
.css-demo-1:hover span:nth-child(2) { height: 0;}
.css-demo-1:hover span:last-child { transform: rotate(45deg);}
```

<div class="css-demo-2">Hover me</div>

```css
.css-demo-2 { position: relative; display: inline-block; cursor: pointer;}
.css-demo-2:before { content: ''; position: absolute; left: 0; bottom: 0; width: 100%; height: 1px; background: #444; transition: transform .2s; backface-visibility: hidden; transform: scaleX(0);}
.css-demo-2:hover:before { transform: scaleX(1);}
```

<div class="css-demo-3"></div>

```css
.css-demo-3 { width: 32px; height: 32px; border: 2px solid #444; border-radius: 50%; animation: pulsecircle .7s linear infinite;}

@keyframes pulsecircle {
    0% {
        transform: scale(.1);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}
```

<div class="css-demo-4"><i class="icon-home"></i></div>

```css
.css-demo-4 { position: relative; width: 40px; height: 40px; box-shadow: 0 0 1px #666; border-radius: 50%; font-size: 1.5em; line-height: 40px; text-align: center; color: #666; transition: .5s cubic-bezier(.3,0,0,1.3);}
.css-demo-4:before { content: ''; position: absolute; left: 0; right: 0; top: 0; bottom: 0; border-radius: 50%; background: #39c492; opacity: 0; transform: scale(0,0); transition: .5s cubic-bezier(.3,0,0,1.3);}
.css-demo-4:hover { color: #fff; box-shadow: 0 0 1px #39c492;}
.css-demo-4:hover:before { opacity: 1; transform: scale(1,1);}
.css-demo-4 i { position: relative; }
```
