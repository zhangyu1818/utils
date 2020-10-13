---
title: useNetwork
group:
  title: Hooks
  path: /hooks
---

# useNetwork

使用[Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)获取用户网络状态的hook。

## 基础使用

<code src="./demos/demo1.tsx" />

某些浏览器如果不支持`Network Information API`，则只能获取`isOnline`和`offlineAt`。

## API

```javascript
  const networkState = useNetwork();
```

