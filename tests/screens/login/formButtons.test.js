import React from 'react'
import { shallow } from 'enzyme'
import FormButtons from '../../../src/screens/login/formButtons'
import Button from 'components/button'

describe('buttons of the login page', () => {
  const mock = jest.fn()

  afterEach(mock.mockClear)

  describe('user has an account', () => {
    const wrapper = shallow(<FormButtons userHasAnAccount onChangeForm={mock} />)

    test('should call onChangeForm function when the user clicks on the new account button', () => {
      wrapper.find(Button).filterWhere(button => button.children().text() === 'Criar uma conta').simulate('click')
      expect(mock).toBeCalled()
    })

    test('should not call onChangeForm function when the user clicks on the login button', () => {
      wrapper.find(Button).filterWhere(button => button.children().text() === 'Logar').simulate('click')
      expect(mock).not.toBeCalled()
    })
  })

  describe('user does not has an account', () => {
    const wrapper = shallow(<FormButtons userHasAnAccount={false} onChangeForm={mock} />)

    test('should call onChangeForm function when the user clicks on the login button', () => {
      wrapper.find(Button).filterWhere(button => button.children().text() === 'Logar').simulate('click')
      expect(mock).toBeCalled()
    })

    test('should not call onChangeForm function when the user clicks on the new account button', () => {
      wrapper.find(Button).filterWhere(button => button.children().text() === 'Criar uma conta').simulate('click')
      expect(mock).not.toBeCalled()
    })
  })
})
