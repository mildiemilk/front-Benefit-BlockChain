import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import profile from './profile'

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profile,
})

export default rootReducer
