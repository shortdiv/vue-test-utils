# setData(data)

Define os dados do `vm` do wrapper e força a sua atualização.

**Nota: o wrapper deve ser uma instância do Vue.**

- **Argumentos:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **Exemplo:**

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