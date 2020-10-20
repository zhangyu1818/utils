---
title: useDebounce
group:
  title: Hooks
  path: /hooks
---

# useDebounce

将函数变为防抖函数的Hook。

## 基础使用

<code src="./demos/demo1.tsx" />

## API

```javascript
const debounceFn = useDebounce(fn, wait: number, options?: {
    maxWait?: number;
    leading?: boolean;
    trailing?: boolean;
    });
```

### 参数

| 参数    | 说明           | 类型                 |
| ------- | -------------- | -------------------- |
| fn      | 需要防抖的函数 | (...args:any[])=>any |
| wait    | 防抖时间       | number               |
| options | 防抖参数       | 见下方               |

### Options

| 参数     | 说明               | 类型    | 默认值 |
| -------- | ------------------ | ------- | ------ |
| maxWait  | 最大等待时间       | number  | -      |
| leading  | 延迟开始前触发函数 | boolean | false  |
| trailing | 延迟结束后触发函数 | boolean | true   |

### 返回值

| 参数              | 说明                       | 类型                 |
| ----------------- | -------------------------- | -------------------- |
| debounceFn        | 防抖处理后的函数           | (...args:any[])=>any |
| debounceFn.cancel | 取消当前执行的防抖函数     | ()=>void             |
| debounceFn.flush  | 立即执行当前等待的防抖函数 | ()=>void             |

