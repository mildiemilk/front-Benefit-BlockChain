import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import profile from './profile'
import plan from './submitPlan'

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profile,
  plan,
})

export default rootReducer
