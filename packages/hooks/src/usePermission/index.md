---
title: usePermission
group:
  title: Hooks
  path: /hooks
---

# usePermission

通过[Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)获取某一个API权限状态的hook。`usePermission`不会发起调用请求，当权限状态改变时，也会获取最新的权限状态。

<code src="./demos/demo1.tsx" />

需要注意权限列表还是需要看浏览器的权限支持情况，并不是所有权限查询都支持。

## API

```javascript
  const state = usePermission(name: PermissionName);
```

### 参数

| 参数 | 说明   | 类型                                                         |
| ---- | ------ | ------------------------------------------------------------ |
| name | 权限名 | [PermissionName](https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts#L20024) |

