---
title: useInterval
group:
  title: Hooks
  path: /hooks
---

# useInterval

处理 `setInterval` 函数的 Hook，在`unmount`时也会自动清除。

## 基础使用

<code src="./demos/demo1.tsx"/>

## 进阶使用

<code src="./demos/demo2.tsx"/>

`useInterval`会返回`start`和`stop`两个控制函数，通过`options`可以设置是否立即开始 、开始时是否立即执行

## API

```javascript
useInterval(fn: () => void, delay: number, options?: { startRightNow?: boolean; immediate?: boolean }) => { start: () => void; stop: () => void };
```

### 参数

| 参数    | 说明         | 类型       |
| ------- | ------------ | ---------- |
| fn      | 回调函数     | () => void |
| delay   | 计时器间隔   | number     |
| options | 额外配置参数 | object     |

### options

| 参数          | 说明               | 类型    | 默认值 |
| ------------- | ------------------ | ------- | ------ |
| startRightNow | 是否立即开始       | boolean | true   |
| immediate     | 开始时是否立即执行 | boolean | false  |

