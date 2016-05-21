---
layout: post
title:  "Get elements filter by including any one of other elements"
date:   2014-7-2
categories: JavaScript
---

```js
function getIncluded(arr1, arr2, prop) {
    return arr1.filter(function(el) {
        var included = false;

        for (var i = 0; i < arr2.length; i++) {
            var element = prop ? el[prop] : el;

            if (element.includes(arr2[i])) {
                included = true;
                break;
            }
        }

        return included;
    });
}
```

```js
getIncluded(['as', 'bs', 'cs'], ['a', 'b']);
// ['as', 'bs']

getIncluded([{ domain: 'as.com'}, { domain: 'bs.com'}, { domain: 'cs.com'}], ['as', 'bs'], 'domain');
// [{ domain: '.as.com'}, { domain: '.bs.com'}]
```
