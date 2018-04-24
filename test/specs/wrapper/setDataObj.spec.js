import {
  describeWithShallowAndMount,
  vueVersion
} from '~resources/utils'

describeWithShallowAndMount('setDataObj', (mountingMethod) => {
  let info

  beforeEach(() => {
    info = sinon.stub(console, 'info')
  })

  afterEach(() => {
    info.restore()
  })
  it('should allow for setting a data value', () => {
    const TestComponent = {
      data: () => ({
        text: 'hello'
      })
    }
    const wrapper = mountingMethod(TestComponent)
    wrapper.setDataObj(wrapper.vm, 'text', 'goodbye')
    expect(wrapper.vm.text).to.equal('goodbye')
  })
  it('should allow for setting a data object', () => {
    const TestComponent = {
      data: () => ({
        message: {
          text: 'hello'
        }
      })
    }
    const wrapper = mountingMethod(TestComponent)
    wrapper.setDataObj(wrapper.vm.message, 'read', true)
    expect(wrapper.vm.message.text).to.equal('hello')
    expect(wrapper.vm.message.read).to.equal(true)
  })
})