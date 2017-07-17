import { combineReducers } from 'redux'

import { authReducer, signupReducer } from './auth'
import fillsimpleReducer from './simple-requirement'
import profile from './profile'
import { plan, menuplanReducer } from './submit-plan'
import postBoxReducer from './post-box'
import {
  setTimeOut,
  chooseInsurerReducer,
  getAllInsurer,
} from './choose-insurer'
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
