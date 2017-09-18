import { APIRequest } from '../';
import {
  getAllBenefitSuccess,
  getAllBenefitFailure,
  confirmPlanSuccess,
  confirmPlanFailure,
  currentPlanSuccess,
  currentPlanFailure,
  claimOptionSuccess,
  claimOptionFailure,
} from '../../reducers/Employee/plan';

const GET_ALL_BENEFIT_URI = '/api/employee/get-all-benefit';
const CONFIRM_PLAN_URI = '/api/employee/confirm-plan';
const SELECT_BENEFIT_URL = '/api/employee/select-benefit';
const NEW_USER_URL = '/api/employee/new-user';
const CURRENT_PLAN_URL = '/api/employee/current-plan';
const CLAIM_OPTION_URL = '/api/employee/claim-option';

export function claimOption() {
  return dispatch => {
    const options = {
      method: 'get',
      url: CLAIM_OPTION_URL,
    };
    APIRequest(options, true)
      .then(res => {
        // console.log('resapi: ', res);
        dispatch(claimOptionSuccess(res.data));
      })
      .catch(err => {
        // console.log('errapi: ', err);
        dispatch(claimOptionFailure(err));
      });
  };
}

export function currentPlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: CURRENT_PLAN_URL,
    };
    APIRequest(options, true)
      .then(res => {
        // console.log('resapi: ', res);
        dispatch(currentPlanSuccess(res.data));
      })
      .catch(err => {
        // console.log('errapi: ', err);
        dispatch(currentPlanFailure(err));
      });
  };
}

export function newUser() {
  return dispatch => {
    const options = {
      method: 'get',
      url: NEW_USER_URL,
    };
    APIRequest(options, true)
    .then(res => {
      dispatch(confirmPlanSuccess(res.data));
    })
    .catch(err => {
      dispatch(confirmPlanFailure(err.response));
    });
  };
}

export function selectBenefit(_id) {
  const options = {
    method: 'put',
    url: SELECT_BENEFIT_URL,
    data: {
      planId: _id,
    },
  };
  return APIRequest(options, true);
}

export function confirmPlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: CONFIRM_PLAN_URI,
    };
    APIRequest(options, true)
    .then(res => {
      dispatch(confirmPlanSuccess(res.data));
    })
    .catch(err => {
      dispatch(confirmPlanFailure(err));
    });
  };
}

export function getAllBenefit() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_ALL_BENEFIT_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getAllBenefitSuccess(res.data));
      })
      .catch(err => {
        // console.log('errapi: ', err);
        dispatch(getAllBenefitFailure(err));
      });
  };
}
