import { actionTypes as types } from '../constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
      return state
    case types.LOGIN_SUCCESS:
      return action.data
    case types.LOGIN_FAILURE:
      return {}
    case types.LOGIN_REQUEST:
      console.log('something here')
      return state
    default:
      return state
  }
}

export default user
