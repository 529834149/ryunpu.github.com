---
layout: post
title:  "Tool functions that return iterables"
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

###### Use Generators

```js
function* objectEntries(obj) {
    const propKeys = Reflect.ownKeys(obj);

    for (const propKey of propKeys) {
        // `yield` returns a value and then pauses
        // the generator. Later, execution continues
        // where it was previously paused.
        yield [propKey, obj[propKey]];
    }
}
```

###### [exploringjs](http://exploringjs.com/es6/ch_iteration.html)
