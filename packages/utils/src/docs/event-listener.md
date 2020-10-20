---
title: eventListener
group:
  title: Utils
  path: /utils
---

# eventListener

绑定事件，返回解绑函数。

## 基础使用

```javascript
const removeListener = eventListener(target,type,listener,options?);
```

## API

| 参数     | 说明         | 类型                 |
| -------- | ------------ | -------------------- |
| target   | 绑定的对象   | any                  |
| type     | 事件名称     | string               |
| listener | 事件回调函数 | (...args:any[])=>any |
| options  | 参数         | any                  |

