# setData(data)

`WrapperArray` の `Wrapper` ごとに `Wrapper` に `vm` データをセットし、強制的に更新します。

**すべての `Wrapper` は Vue インスタンスを含んでいなければならないことに注意してください。**

- **引数:**
  - `{Object} target`
  - `{string} key`
  - `{any} value`

- **例:**

```js
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'
import Bar from './Bar.vue'

const wrapper = mount(Foo)
const barArray = wrapper.findAll(Bar)
barArray.setData(barArray.vm, 'foo', 'bar')
expect(barArray.at(0).vm.foo).toBe('bar')
```
