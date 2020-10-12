---
title: useClipboard
group:
  title: Hooks
  path: /hooks
---

# useClipboard

响应用户复制、提供写入剪贴板功能的Hook，使用[Clipboard API](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard_API)，需要用户授予权限。

## 基础使用

<code src="./demos/demo1.tsx"/>

## API

```javascript
  const { text, copy, supported } = useClipboard();
```