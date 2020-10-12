---
title: useReactiveRef
group:
  title: Hooks
  path: /hooks
---

# useReactiveRef

类似于Vue 3中的`ref`，即响应式的`ref`的Hook。

## 基础使用

<code src="./demos/demo1.tsx"/>

值得注意的是，`useReactiveRef`返回的值仅仅是浅响应式的，比如`value.current.count++`这样是无效的。

## API

```javascript
const ref = useReactiveRef(value:any);
```

### 参数

| 参数  | 说明    | 类型 |
| ----- | ------- | ---- |
| value | ref的值 | any  |