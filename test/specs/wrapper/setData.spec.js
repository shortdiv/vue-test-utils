import { compileToFunctions } from 'vue-template-compiler'
import ComponentWithVIf from '~resources/components/component-with-v-if.vue'
import ComponentWithWatch from '~resources/components/component-with-watch.vue'
import {
  describeWithShallowAndMount,
  vueVersion
} from '~resources/utils'

describeWithShallowAndMount('setData', (mountingMethod) => {
  let info

  beforeEach(() => {
    info = sinon.stub(console, 'info')
  })

  afterEach(() => {
    info.restore()
  })

  it('sets component data and updates nested vm nodes when called on Vue instance', () => {
    const wrapper = mountingMethod(ComponentWithVIf)
    expect(wrapper.findAll('.child.ready').length).to.equal(0)
    wrapper.setData(wrapper.vm, 'ready', true)
    expect(wrapper.findAll('.child.ready').length).to.equal(1)
  })

  it('keeps element in sync with vnode', () => {
    const Component = {
      template: '<div class="some-class" v-if="show">A custom component!</div>',
      data () {
        return {
          show: false
        }
      }
    }
    const wrapper = mountingMethod(Component)
    wrapper.setData(wrapper.vm, 'show', true)
    expect(wrapper.element).to.equal(wrapper.vm.$el)
    expect(wrapper.hasClass('some-class')).to.be.true
  })

  it('runs watch function when data is updated', () => {
    const wrapper = mountingMethod(ComponentWithWatch)
    const data1 = 'testest'
    wrapper.setData(wrapper.vm, 'data1', data1)
    expect(wrapper.vm.data2).to.equal(data1)
  })

  it('runs watch function after all props are updated', () => {
    const wrapper = mountingMethod(ComponentWithWatch)
    const data1 = 'testest'
    wrapper.setData(wrapper.vm, 'data2','newProp')
    wrapper.setData(wrapper.vm, 'data1', data1)
    expect(info.args[1][0]).to.equal(data1)
  })

  it('throws error if node is not a Vue instance', () => {
    const message = 'wrapper.setData() can only be called on a Vue instance'
    const compiled = compileToFunctions('<div><p></p></div>')
    const wrapper = mountingMethod(compiled)
    const p = wrapper.find('p')
    expect(() => p.setData(wrapper.vm, 'ready', true)).throw(Error, message)
  })

  it('throws error when called on functional vnode', () => {
    const AFunctionalComponent = {
      render: (h, context) => h('div', context.prop1),
      functional: true
    }
    const message = '[vue-test-utils]: wrapper.setData() cannot be called on a functional component'
    const wrapper = mountingMethod(AFunctionalComponent)
    const fn = () => wrapper.setData(wrapper.vm, 'data1', 'data')
    expect(fn).to.throw().with.property('message', message)
    // find on functional components isn't supported in Vue < 2.3
    if (vueVersion < 2.3) {
      return
    }
    const TestComponent = {
      template: '<div><a-functional-component /></div>',
      components: {
        AFunctionalComponent
      }
    }
    const wrapper2 = mountingMethod(TestComponent)
    const FuncComp = wrapper2.find(AFunctionalComponent)
    const fn2 = () => FuncComp.setData(FuncComp.vm, 'data1', 'data')
    expect(fn2).to.throw().with.property('message', message)
  })

  it('updates watchers if computed is updated', () => {
    const TestComponent = {
      template: `
        <em>{{ computedText }}</em>
        `,
      data () {
        return {
          text: '',
          basket: []
        }
      },
      computed: {
        computedText () {
          return this.text
        }
      },
      watch: {
        text () {
          this.basket.push(this.computedText)
        }
      }
    }
    const wrapper = mountingMethod(TestComponent)

    wrapper.setData(wrapper.vm, 'text', 'hello')
    expect(wrapper.vm.basket[0]).to.equal('hello')
  })

  it('should update watchers correctly', () => {
    const TestComponent = {
      template: `
      <div>
        <div v-if="!message">There is no message yet</div>
        <div v-else>{{ reversedMessage }}</div>
      </div>
      `,
      data: () => ({
        message: 'egassem'
      }),
      computed: {
        reversedMessage: function () {
          return this.message.split('').reverse().join('')
        }
      }
    }
    const wrapper = mountingMethod(TestComponent)
    wrapper.setData(wrapper.vm, 'message', null)
    expect(wrapper.text()).to.equal('There is no message yet')
  })
})
