import { combineReducers } from 'redux';

import { authReducer, signupReducer } from './auth';
import { userReducer } from './user';
import fillsimpleReducer from './simple-requirement';
import profile from './profile';
import { plan, menuplanReducer } from './submit-plan';
import postBoxReducer from './post-box';
import {
  setTimeOut,
  chooseInsurerReducer,
  getAllInsurer,
  getSelectInsurer,
} from './choose-insurer';
import { biddingReducer, endTimeout, selectFinalInsurer } from './bidding';
import { choosePlan, benefitPlan } from './benefit-plan';

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
  choosePlan,
  benefitPlan,
  getSelectInsurer,
  selectFinalInsurer,
  userReducer,
});

export default rootReducer;
