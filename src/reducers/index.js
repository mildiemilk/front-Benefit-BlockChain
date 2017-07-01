import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import fillsimpleReducer from './simpleRequirement'
import profile from './profile'

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profile,
  fillsimpleReducer,
})

export default rootReducer
