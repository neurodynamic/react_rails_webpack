// Example redux reducer
// Reducer style reference: https://github.com/erikras/ducks-modular-redux

const SET_GREETING = 'SET_GREETING'

const initialState = 'Hello'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_GREETING:
      return action.greeting

    default:
      return state
  }
}

export function setGreeting (greeting) {
  return { type: SET_GREETING, greeting: greeting }
}
