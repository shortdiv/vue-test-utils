# setData(data)

`Wrapper` `vm` データを設定し、更新を強制します。

**Wrapper には Vue インスタンスを含む必要があることに注意してください**

- **引数:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **例:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm, 'foo', 'bar')
expect(wrapper.vm.foo).toBe('bar')
```

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm.text, message, 'hello' })
expect(wrapper.vm.text.message).toBe('hello')
```