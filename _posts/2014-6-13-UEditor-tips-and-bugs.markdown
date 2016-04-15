---
layout: post
title:  "UEditor tips and bugs"
date:   2014-6-13
categories: JavaScript
---

### Commonly used API:

```js
ue.ready(function() {
    ue.setContent('<p>hello!</p>'); // 设置编辑器内容
    ue.setContent('<p>new text</p>', true); // 追加编辑器内容
    ue.getContent(); // 获取编辑器html内容
    ue.getContentTxt(); // 获取纯文本内容
    ue.hasContents(); // 判断编辑器是否有内容
    ue.execCommand('drafts'); // 读取草稿箱
    ue.execCommand('clearlocaldata'); // 清空草稿箱
});
```

###### <a href="http://fex.baidu.com/ueditor/#api-common" target="_blank">more API</a>

### Bugs:

###### font plugins bug (can not set a uniform font size when paste some UEditor generated content):

```js
/**
 * UE.version = "1.4.3"
 * in about line 11658
 * my hacks
 */
range.applyInlineStyle('span', {'class': 'ue-fz-hack', 'style': style + ':' + value});
mergesibling(range, cmdName,value);
var hackList = range.getCommonAncestor().querySelectorAll('.ue-fz-hack');
for (var i = 0, listLength = hackList.length; i < listLength; i++) {
    var children = hackList[i].children;
    for (var j = 0, childLength = children.length; j < childLength; j++) {
        children[j].style.fontSize = 'inherit';

        var grandchildren = children[j].children;
        for (var k = 0, grandchildLength = grandchildren.length; k < grandchildLength; k++) {
            grandchildren[k].style.fontSize = 'inherit';
        }
    }
    
    hackList[i].removeAttribute('class');
}
```
