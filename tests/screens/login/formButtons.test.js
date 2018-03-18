import React from 'react'
import { shallow } from 'enzyme'
import FormButtons from '../../../src/screens/login/formButtons'

describe.skip('form buttons component', () => {
  test('should has a button with type submit and text equals login when the user has an account', () => {
    const wrapper = shallow(<FormButtons />)
    const SubmitButton = wrapper.find('Button').filterWhere(b => b.type() === 'button')
    expect(SubmitButton.length).toBe(1)
    SubmitButton.text().to.equal('Logar')
  })
})
