import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import fillsimpleReducer from './simpleRequirement'
import profile from './profile'
import plan from './submitPlan'
import postBoxReducer from './postBox'
import {
  setTimeOut,
  chooseInsurerReducer,
  getAllInsurer,
} from './chooseInsurer'
import { endTimeout } from './bidding'

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profile,
  fillsimpleReducer,
  plan,
  postBoxReducer,
  chooseInsurerReducer,
  setTimeOut,
  getAllInsurer,
  endTimeout,
})

export default rootReducer
