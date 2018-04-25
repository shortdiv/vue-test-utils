# setData(data)

Устанавливает данные `Wrapper` `vm` и выполняет принудительное обновление.

**Обратите внимание, что `Wrapper` должен содержать экземпляр Vue.**

- **Принимает:**
  - `{Object} data`

- **Пример:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData({ foo: 'bar' })
expect(wrapper.vm.foo).toBe('bar')
```

# `setDataObj(target, key, value)`

Устанавливает объект данных `Wrapper`` vm` и принудительно обновляет. Это похоже на структуру `Vue.set` и` vm. $ Set`.

- **Принимает:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **Пример:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm.text, message, 'hello' })
expect(wrapper.vm.text.message).toBe('hello')
```