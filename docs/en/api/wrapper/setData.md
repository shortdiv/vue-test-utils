# `setData(target, key, value)`

Sets `Wrapper` `vm` data and forces update.

**Note the Wrapper must contain a Vue instance.**

- **Arguments:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **Example:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm, foo, 'bar')
expect(wrapper.vm.foo).toBe('bar')
```

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm.text, message, 'hello' })
expect(wrapper.vm.text.message).toBe('hello')
```
