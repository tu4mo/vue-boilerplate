import { shallow } from '@vue/test-utils'
import Header from './Header.vue'

describe('Header', () => {
  it('should render correctly', () => {
    const component = shallow(Header, {
      stubs: ['router-link']
    })
    expect(component.element).toMatchSnapshot()
  })
})
