import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import { Home } from '../Home'

test('<Home> will render wikiIds', () => {
  const $$wikiIds = fromJS([1, 2, 3])

  const home = shallow(
    <Home $$wikiIds={$$wikiIds} />
  )

  expect(home.find('.list-wikiId').length).toEqual(3)
})

test('<Home> text input will update home state', () => {
  const home = shallow(
    <Home $$wikiIds={fromJS([])} />
  )

  let input = home.find('input[type="text"]')
  expect(home.state().value).toEqual('')
  expect(input.props().value).toEqual('')

  input.simulate('change', { target: { value: 'hello'} })

  expect(home.state().value).toEqual('hello')
  input = home.find('input[type="text"]')
  expect(input.props().value).toEqual('hello')
})
