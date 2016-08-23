import {expect} from 'chai'

import reducer from '../../../src/redux/reducer'
import {setGreeting} from '../../../src/redux/reducer'

describe('setGreeting', () => {
  it('sets the greeting', () => {
    const initialState = { greeting: 'Heck off' }
    const betterGreeting = 'Lovely to meet you'

    const action = setGreeting(betterGreeting)

    const nextState = reducer(initialState, action)

    expect(nextState.greeting).to.equal(betterGreeting)
  })
})
