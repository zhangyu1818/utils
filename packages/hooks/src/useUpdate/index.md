---
title: useUpdate
group:
  title: Hooks
  path: /hooks
---

# useUpdate

仅在依赖更新时执行的hook。

## API

```javascript
useUpdate(
  effect: EffectCallback,
  deps?: DependencyList,
)
```

## 参数

| 参数   | 说明       | 类型           |
| ------ | ---------- | -------------- |
| effect | 副作用函数 | EffectCallback |
| deps   | 依赖列表   | DependencyList |

