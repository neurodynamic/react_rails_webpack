import {Hello} from '../components/Hello'
import {HelloWithReduxContainer} from '../components/HelloWithRedux'

// Edit this list with your own React components.
// Set the redux key to true to integrate them
// with redux for application state management.
export default {
  HelloWithRedux: {
    redux: true,
    class: HelloWithReduxContainer
  },
  Hello: {
    class: Hello
  }
}
