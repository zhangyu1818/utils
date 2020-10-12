---
title: useCssVar
group:
  title: Hooks
  path: /hooks
---

# useCssVar

控制`CSS`变量的Hook。

<code src="./demos/demo1.tsx"/>

## API

```javascript
const color = useCssVar(prop: string, arg?: string | React.MutableRefObject<HTMLElement | null>);
```

### 参数

| 参数 | 说明            | 类型                           | 默认值 |
| ---- | --------------- | ------------------------------ | ------ |
| prop | CSS变量名称     | string                         | -      |
| arg  | CSS变量所在元素 | string\|React.MutableRefObject | "html" |

