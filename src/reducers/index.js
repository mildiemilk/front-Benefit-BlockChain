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
import {
  getAllBenefitReducer,
  confirmPlanReducer,
  currentPlanReducer,
  claimOptionReducer,
} from './Employee/plan';
import { getClaimStatusReducer } from './Employee/claim';
import { biddingInsurerReducer } from './Insurer/bidding';
import { customerReducer } from './Insurer/customer';

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
  getAllBenefitReducer,
  confirmPlanReducer,
  currentPlanReducer,
  biddingInsurerReducer,
  biddingListReducer,
  claimOptionReducer,
  getClaimStatusReducer,
  customerReducer,
});

export default rootReducer;
