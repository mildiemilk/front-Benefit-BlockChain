import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import fillsimpleReducer from './simpleRequirement'
import profile from './profile'
import plan from './submitPlan'
import postBoxReducer from './postBox'

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profile,
  fillsimpleReducer,
  plan,
  postBoxReducer,
})

export default rootReducer
