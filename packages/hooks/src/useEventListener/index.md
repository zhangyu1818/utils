---
title: useEventListener
group:
  title: Hooks
  path: /hooks
---

# useEventListener

绑定事件的 Hook，在`unmount`时会自动解绑事件。

## 基本使用

<code src="./demos/demo1.tsx" />

`useEventListener`会从`on`、`off`，`addEventListener`、`removeEventListener`，`addListener`、`removeListener`中找到当前事件绑定对象`target`中拥有的方法。

## 自定义事件绑定 keys

<code src="./demos/demo2.tsx" />

使用第四个参数 `keys` 可以自定义事件绑定对象`target`绑定和解绑方法名，在`typescript`中使用时泛型参数表示回调函数中的对象类型。

## API

```javascript
useEventListener(target: any, type: string, listener: (...args: any[]) => void, keys?: [string, string]);
```

### 参数

| 参数     | 说明                 | 类型                     |
| -------- | -------------------- | :----------------------- |
| target   | 事件绑定对象         | any                      |
| type     | 事件名称             | string                   |
| listener | 事件处理函数         | (...args: any[]) => void |
| keys     | 事件绑定和解绑方法名 | [string,string]          |