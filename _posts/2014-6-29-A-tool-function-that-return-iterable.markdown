---
layout: post
title:  "A tool function that return iterable"
date:   2014-6-29
categories: JavaScript
---

```js
function objectEntries(obj) {
    let iter = Reflect.ownKeys(obj)[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let { done, value: key } = iter.next();
            if (done) {
                return { done: true };
            }
            return { value: [key, obj[key]] };
        }
    };
}
```

```js
const obj = { first: 'Jane', last: 'Doe' };
for (const [key,value] of objectEntries(obj)) {
    console.log(`${key}: ${value}`);
}
```

```js
// Output:
// first: Jane
// last: Doe
```
