import React from 'react'
import { shallow } from 'enzyme'
import FormButtons from '../../../src/screens/login/formButtons'

describe.skip('buttons of the login page', () => {
  test('should call onChangeForm function when the user clicks on the new account button', () => {
    const mock = jest.fn()
    const wrapper = shallow(<FormButtons userHasAnAccount onChangeForm={mock} />)
    const ChangeFormButton = wrapper.findWhere(b => b.children() === 'Criar uma conta')
    console.log(ChangeFormButton)
    ChangeFormButton.simulate('click')
    mock.toBeCalled()
  })
})
