---
title: useGeolocation
group:
  title: Hooks
  path: /hooks
---

# useGeolocation

获取用户地理位置的hook。

## 基础使用

<code src="./demos/demo1.tsx" />

## API

```javascript
  const { coords, timestamp, error } = useGeolocation(options?: PositionOptions);
```

### options

| 参数               | 说明                             | 类型    |
| ------------------ | -------------------------------- | ------- |
| enableHighAccuracy | 是否使用高精度                   | boolean |
| timeout            | 超时时间                         | number  |
| maximumAge         | 返回多长时间内的可获取的缓存位置 | number  |

