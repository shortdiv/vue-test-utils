# setData(target, key, value)

<p><strong>⚠Cette page est actuellement en cours de traduction française. Vous pouvez repasser plus tard ou <a href="https://github.com/vuejs-fr/vue-test-utils" target="_blank">participer à la traduction</a> de celle-ci dès maintenant !</strong></p><p>Sets `Wrapper` `vm` data and forces update.</p>

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