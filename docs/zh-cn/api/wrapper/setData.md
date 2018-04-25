# `setData(data)`

设置 `Wrapper` `vm` 的属性并强制更新。

**注意：该包裹器必须包含一个 Vue 示例。**

- **参数：**
  - `{Object} data`

- **示例：**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData({ foo: 'bar' })
expect(wrapper.vm.foo).toBe('bar')
```

# `setDataObj(target, key, value)`

设置`Wrapper``vm`数据对象并强制更新。 这在结构上与`Vue.set`和`vm。$ set`类似。

- **参数：**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **示例：**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm.text, message, 'hello' })
expect(wrapper.vm.text.message).toBe('hello')
```