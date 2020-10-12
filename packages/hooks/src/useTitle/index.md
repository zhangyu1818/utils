---
title: useTitle
group:
  title: Hooks
  path: /hooks
---

# useTitle

设置 document title 的 hook。

## 基础使用

<code src="./demos/demo1.tsx" />

## API

```javascript
   const [title, setTitle] = useTitle(title?: string);
   const [title, setTitle] = useTitle(resetOnUnmount?: boolean);
   const [title, setTitle] = useTitle(title?: string, resetOnUnmount?: boolean);
```

### 参数

| 参数           | 说明                       | 类型    |
| -------------- | -------------------------- | ------- |
| title          | 设置初始的title            | string  |
| resetOnUnmount | onmount时候清除设置的title | boolean |

