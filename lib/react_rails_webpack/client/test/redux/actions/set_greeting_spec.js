import {expect} from 'chai'

import reducer from '../../../src/redux/reducer'
import {setGreeting} from '../../../src/redux/reducer'

describe('setGreeting', () => {
  it('sets the greeting', () => {
    const initialState = 'Heck off'

    const action = setGreeting('Lovely to meet you')

    const nextState = reducer(initialState, action)
    const expectedState = 'Lovely to meet you'

    expect(nextState).to.equal(expectedState)
  })
})
