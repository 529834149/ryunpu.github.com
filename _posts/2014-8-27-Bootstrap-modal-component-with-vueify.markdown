---
layout: post
title:  "Bootstrap modal component with vueify"
date:   2014-8-27
categories: JavaScript
---

```xml
<template>
    <div :id="id" class="modal" :class="[fade ? 'fade' : '']">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="title"></slot>
                </div>
                <div class="modal-body">
                    <slot name="content"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="btns"></slot>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</template>

<script>
    export default {
        props: ['id', 'fade']
    };
</script>
```

```html
<div data-modal-component v-cloak>
    <modal id="modal" fade=true>
        <h4 slot="title">下载附件花费100积分</h4>
        <div slot="content">下载完成前请勿关闭此窗口，点击确认开始下载，同时扣除相应积分。建议您使用与我们程序兼容的设备和软件，同时在网络通畅的情况下进行下载，否则因为您使用的系统、设备或网络问题造成下载失败，所扣积分不与返还。</div>
        <div slot="btns">
            <a class="tt-btn" href="javascripts:;" data-dismiss="modal">取消</a>
            <a class="tt-btn" href="javascripts:;">确定</a>
        </div>
    </modal>
</div>
```

```js
import modal from './components/modal.vue';

$('[data-modal-component]').each((i, el) => {
    new Vue({
        el: el,
        components: {
            modal: modal
        }
    });
});
```
