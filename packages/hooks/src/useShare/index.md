---
title: useShare
group:
  title: Hooks
  path: /hooks
---

# useShare

使用[Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)分享信息到其他应用的hook，目前仅支持[部分浏览器](https://caniuse.com/?search=Web%20Share%20API)。

## 基础使用

<code src="./demos/demo1.tsx"/>

## API

```javascript
const share = useShare(defaultOptions?: ShareOptions);
share(options?: ShareOptions);
```

### ShareOptions

| 参数  | 说明         | 类型   |
| ----- | ------------ | ------ |
| title | 要分享的标题 | string |
| text  | 要分享的文本 | string |
| url   | 要分享的url  | string |
| files | 要分享的文件 | File[] |

