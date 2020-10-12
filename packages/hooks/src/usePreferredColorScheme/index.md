---
title: usePreferredColorScheme
group:
  title: Hooks
  path: /hooks
---

# usePreferredColorScheme

查询系统的主题色的Hook。

## 基础使用

<code src="./demos/demo1.tsx"/>

`"no-preference"`代表系统不支持设置主题色或将主题色设置为未设置。

## API

```javascript
usePreferredColorScheme() => "dark" | "light" | "no-preference"
```

