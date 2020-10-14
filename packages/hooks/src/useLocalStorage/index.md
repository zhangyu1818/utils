---
title: useLocalStorage
group:
  title: Hooks
  path: /hooks
---

# useLocalStorage

将`localStorage`状态持久化的hook。

## 基础使用

<code src="./demos/demo1.tsx" />

如果赋值为`null`，则会从`localStorage`移除。

## API

```javascript
  const [value, setValue] = useLocalStorage<T>(key:string, defaultValue:T);
```

### 参数

| 参数         | 说明                   | 类型   |
| ------------ | ---------------------- | ------ |
| key          | localStorage的键名     | string |
| defaultValue | 当键名不存在时的默认值 | any    |

