---
title: useThrottle
group:
  title: Hooks
  path: /hooks
---

# useThrottle

将函数变为节流函数的Hook。

## 基础使用

<code src="./demos/demo1.tsx" />

## API

```javascript
const throttleFn = useThrottle(fn, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
    });
```

### 参数

| 参数    | 说明           | 类型                 |
| ------- | -------------- | -------------------- |
| fn      | 需要节流的函数 | (...args:any[])=>any |
| wait    | 节流时间       | number               |
| options | 节流参数       | 见下方               |

### Options

| 参数     | 说明               | 类型    | 默认值 |
| -------- | ------------------ | ------- | ------ |
| leading  | 延迟开始前触发函数 | boolean | true  |
| trailing | 延迟结束后触发函数 | boolean | true   |

### 返回值

| 参数              | 说明                       | 类型                 |
| ----------------- | -------------------------- | -------------------- |
| throttleFn        | 节流处理后的函数           | (...args:any[])=>any |
| throttleFn.cancel | 取消当前执行的节流函数     | ()=>void             |
| throttleFn.flush  | 立即执行当前等待的节流函数 | ()=>void             |

