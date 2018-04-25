# `setData(data)`

Sets `Wrapper` `vm` data and forces update.

**Note the Wrapper must contain a Vue instance.**

- **Arguments:**
  - `{Object} data`

- **Example:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData({ foo: 'bar' })
expect(wrapper.vm.foo).toBe('bar')
```

# `setDataObj(target, key, value)`

Sets `Wrapper` `vm` data object and forces update. This is similar in structure to `Vue.set` and `vm.$set`.

- **Arguments:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **Example:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm.text, message, 'hello' })
expect(wrapper.vm.text.message).toBe('hello')
```
