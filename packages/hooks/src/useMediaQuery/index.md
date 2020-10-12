---
title: useMediaQuery
group:
  title: Hooks
  path: /hooks
---

# useMediaQuery

媒体查询的Hook，当媒体查询的值发生变化时Hook也会重新刷新。

## 基础使用

<code src="./demos/demo1.tsx"/>

## API

```javascript
const matches = useMediaQuery(query: string);
```

 ### 参数

| 参数  | 说明                     | 类型   |
| ----- | ------------------------ | ------ |
| query | 用于媒体查询解析的字符串 | string |

