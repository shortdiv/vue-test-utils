# setData(data)

`Wrapper` `vm`의 데이터를 갱신합니다.

**참고: Wrapper는 Vue 인스턴스를 반드시 가지고 있어야합니다.**

- **전달인자:**
  - `{Object} data`

- **예제:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData({ foo: 'bar' })
expect(wrapper.vm.foo).toBe('bar')
```
# `setDataObj(target, key, value)`

`Wrapper` `vm` 데이터 객체와 강제 업데이트. 이것은`Vue.set`과`vm. $ set`과 구조가 비슷합니다.

- **전달인자:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **예제:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)
wrapper.setData(wrapper.vm.text, message, 'hello' })
expect(wrapper.vm.text.message).toBe('hello')
```