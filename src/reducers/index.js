import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import fillsimpleReducer from './simpleRequirement'
import profile from './profile'
import { plan, menuplanReducer } from './submitPlan'
import postBoxReducer from './postBox'
import {
  setTimeOut,
  chooseInsurerReducer,
  getAllInsurer,
} from './chooseInsurer'
import { biddingReducer, endTimeout } from './bidding'

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profile,
  fillsimpleReducer,
  plan,
  menuplanReducer,
  postBoxReducer,
  chooseInsurerReducer,
  setTimeOut,
  getAllInsurer,
  biddingReducer,
  endTimeout,
})

export default rootReducer
