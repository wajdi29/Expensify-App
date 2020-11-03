import { shallow } from 'enzyme'
import React from 'react'
import { Header } from '../../components/Header'
test('Should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should call startLogout onClick', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})
