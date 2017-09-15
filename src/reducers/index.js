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
import { biddingListReducer } from './Insurer/bidding';
import { choosePlan, benefitPlan } from './benefit-plan';
<<<<<<< HEAD
import { getAllBenefitReducer, confirmPlanReducer, currentPlanReducer } from './Employee/plan';
=======
import { biddingInsurerReducer } from './Insurer/bidding';
>>>>>>> 809f5efe673e3066340f416fb9da2146953722fb

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
<<<<<<< HEAD
  getAllBenefitReducer,
  confirmPlanReducer,
  currentPlanReducer,
=======
  biddingInsurerReducer,
  biddingListReducer,
>>>>>>> 809f5efe673e3066340f416fb9da2146953722fb
});

export default rootReducer;
