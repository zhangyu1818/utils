---
title: devWarning
group:
  title: Utils
  path: /utils
---

# devWarning

在`process.env.NODE_ENV === 'development'`情况下输出信息。

## 基础使用

```javascript
devWarning(warning: string);
devWarning(assert: boolean, warning: string);
```