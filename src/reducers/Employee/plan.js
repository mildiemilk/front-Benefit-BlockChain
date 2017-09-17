/**
 * Default State
 */
const defaultPlan = {
  allBenefit: [],
  group: {},
};

const defaultConfirm = {
  confirm: null,
  newUser: null,
  currentSelect: null,
};

const defaultCurrentPlan = {
  currentPlan: {},
};

/**
 * Action Constansts
 */
const GET_ALL_BENEFIT_REQUEST_SUCCESS = 'auth/GET_ALL_BENEFIT_REQUEST_SUCCESS';
const GET_ALL_BENEFIT_REQUEST_FAILURE = 'auth/GET_ALL_BENEFIT_REQUEST_FAILURE';
const CONFIRM_PLAN_REQUEST_SUCCESS = 'auth/CONFIRM_PLAN_REQUEST_SUCCESS';
const CONFIRM_PLAN_REQUEST_FAILURE = 'auth/CONFIRM_PLAN_REQUEST_FAILURE';
const CURRENT_PLAN_REQUEST_SUCCESS = 'auth/CURRENT_PLAN_REQUEST_SUCCESS';
const CURRENT_PLAN_REQUEST_FAILURE = 'auth/CURRENT_PLAN_REQUEST_FAILURE';

/**
 * Actions
 */
export function getAllBenefitSuccess(data) {
  return { type: GET_ALL_BENEFIT_REQUEST_SUCCESS, data };
}

export function getAllBenefitFailure(data) {
  return { type: GET_ALL_BENEFIT_REQUEST_FAILURE, data };
}

export function confirmPlanSuccess(data) {
  return { type: CONFIRM_PLAN_REQUEST_SUCCESS, data };
}

export function confirmPlanFailure(data) {
  return { type: CONFIRM_PLAN_REQUEST_FAILURE, data };
}

export function currentPlanSuccess(data) {
  return { type: CURRENT_PLAN_REQUEST_SUCCESS, data };
}

export function currentPlanFailure(data) {
  return { type: CURRENT_PLAN_REQUEST_FAILURE, data };
}

export function currentPlanReducer(state = defaultCurrentPlan, action) {
  switch (action.type) {
    case CURRENT_PLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        currentPlan: action.data,
      });
    case CURRENT_PLAN_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}

export function confirmPlanReducer(state = defaultConfirm, action) {
  switch (action.type) {
    case CONFIRM_PLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        confirm: action.data.confirm,
        newUser: action.data.newUser,
        currentSelect: action.data.currentSelect,
      });
    case CONFIRM_PLAN_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}

export function getAllBenefitReducer(state = defaultPlan, action) {
  switch (action.type) {
    case GET_ALL_BENEFIT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        allBenefit: action.data.benefitPlan,
        group: action.data.group,
      });
    case GET_ALL_BENEFIT_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
