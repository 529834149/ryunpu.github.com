---
layout: post
title:  "Use Animate.css"
date:   2014-6-9
categories: CSS
---

```css
.animated { animation-duration: 1s; animation-fill-mode: both;}
.animated.infinite { animation-iteration-count: infinite;}
.fadeInUp { animation-name: fadeInUp;}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: none;
    }
}
```

###### <a href="{{ site.prose.siteurl }}/Plugins/css/animate/demo.html" target="_blank">demo</a>
