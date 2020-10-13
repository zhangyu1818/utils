---
title: useStartTyping
group:
  title: Hooks
  path: /hooks
---

# useStartTyping

输入0-9，小键盘0-9，a-z时，如果没有focus的元素，则触发回调的hook。

## 基础使用

<code src="./demos/demo1.tsx"/>

## API

```javascript
useStartTyping(onStartTyping: (event: KeyboardEvent) => void);
```

### 参数

| 参数          | 说明     | 类型                           |
| ------------- | -------- | ------------------------------ |
| onStartTyping | 回调函数 | (event: KeyboardEvent) => void |

