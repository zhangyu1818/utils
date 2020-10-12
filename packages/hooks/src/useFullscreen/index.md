---
title: useFullscreen
group:
  title: Hooks
  path: /hooks
---

# useFullscreen

 处理全屏状态的hook。

## 基础使用

<code src="./demos/demo1.tsx"/>

## API

```javascript
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen(target?: HTMLElement | React.MutableRefObject<HTMLElement | null>);
```

### 参数

| 参数   | 说明           | 类型                                | 默认值        |
| ------ | -------------- | ----------------------------------- | ------------- |
| target | 需要全屏的元素 | HTMLElement\|React.MutableRefObject | document.body |

