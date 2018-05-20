# Testing with Custom Matchers

Testing utilities like Jasmine, and Jest often provide conditionals like `toBeEqual` or `toHaveBeenCalledWith` to check that a piece of code has an expected outcome. However, more often than not, a project might have a unique set of conditions that it might want to check against that are not included in Jasmine or Jest. For example, if you wanted to test that something is a component, you could could create a method called `isAComponent` and check whether the return value of that method is true

```JS
import BaseComponent from './BaseComponent'
import { isPlainObject } from 'lodash'

describe('@components/baseComponent', () => {
  let isAComponent
  beforeEach(() => {
    isAComponent = (comp) => {
      return isPlainObject(comp) && typeof comp.render === 'function'
    }
  })
  it('exports a valid component', () => {
    const isValidComponent = isAComponent(BaseComponent)
    expect(isValidComponent).toBe(true)
  })
})
```

While testing in this manner works, your code will have to be replicated when you have to test for whether something is a component across multiple specs. Thankfully, test libraries like Jest and Jasmine offer a solution to this problem via custom matchers.

## Custom Matchers

Custom matchers allow you to encapsulate custom matching code for use across multiple tests. A custom matcher is a comparison function that compares an actual value with an expected value. Ideally, a custom matcher is created in a beforeEach block or in a separate setup file that your test library uses to run tests.

### Jasmine

To create a custom matcher and append it to Jasmine, you can use `jasmine.addMatchers`. For the exact documentation of this API, refer to the [Jasmine docs](https://jasmine.github.io/2.0/custom_matcher.html).


```JS
import BaseComponent from './BaseComponent'

describe('@components', () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeAComponent: () => {
        const isAComponent = () => {
          return _.isPlainObject(options) && typeof options.render === 'function'
        }
        return {
          compare: (options) => {
            const result = isAComponent(options)
            if(result.pass) {
              result.message = `expected ${this.utils.printReceived(
                options
              )} not to be a Vue component`
            } else {
              result.message = `expected ${this.utils.printReceived(
                options
              )} to be a valid Vue component, exported from a .vue file`
            }
            return result
          }
        }
      }
    })
  })
  describe('@components/baseComponent', () => {
    it('exports a valid component', () => {
      const isValidComponent = isAComponent(BaseComponent)
      expect(isValidComponent).toBeAComponent()
    })
  })
})
```

### Jest

To create a custom matcher and append it to Jest, you can use `expect.extend`. For the exact documentation of this API, refer to the [Jest docs](https://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers).

```JS
import BaseComponent from './BaseComponent'

describe('@components', () => {
  beforeEach(() => {
    expect.extend({
      toBeAComponent: (options) => {
        if (isAComponent()) {
          return {
            message: () =>
              `expected ${this.utils.printReceived(
                options
                )} not to be a Vue component`,
            pass: true,
          }
        } else {
          return {
            message: () =>
              `expected ${this.utils.printReceived(
                options
              )} to be a valid Vue component, exported from a .vue file`,
            pass: false,
          }
        }
        function isAComponent() {
          return _.isPlainObject(options) && typeof options.render === 'function'
        }
      }
    })
  })
  describe('@components/baseComponent', () => {
    it('exports a valid component', () => {
      const isValidComponent = isAComponent(BaseComponent)
      expect(isValidComponent).toBeAComponent()
    })
  })
})
```

You can also extrapolate the code in the beforeEach block into a separate file and then update your `jest.config` file to include the matcher file to ensure that jest accounts for custom matchers when it runs your tests.

```JS
const customMatchers = {}
customMatchers.isAComponent = () => {...}
global.expect.extend(customMatchers)
```

```JS
module.exports = {
  ...
  setupTestFrameworkScriptFile: '<rootDir>/tests/unit/matchers'
};
```