/**
 * Default State
 */
const defaultPlan = {
  insurancePlan: {
    master: [],
    insurer: [],
  },
  detailPlan: '',
  choosePlan: {},
  health: {},
  isHealth: false,
  expense: {},
  isExpense: false,
};

const defaultBenefitPlan = {
  plan: [],
  timeout: null,
};

/**
 * Action Constansts
 */
const GETINSURANCEPLAN_REQUEST_SUCCESS = 'GETINSURANCEPLAN_REQUEST_SUCCESS';
const GETINSURANCEPLAN_REQUEST_FAILURE = 'GETINSURANCEPLAN_REQUEST_FAILURE';

const CHOOSEPLAN_REQUEST_SUCCESS = 'CHOOSEPLAN_REQUEST_SUCCESS';
const CHOOSEPLAN_REQUEST_FAILURE = 'CHOOSEPLAN_REQUEST_FAILURE';
// const EDITCHOOSEPLAN_REQUEST_SUCCESS = 'EDITCHOOSEPLAN_REQUEST_SUCCESS';
// const EDITCHOOSEPLAN_REQUEST_FAILURE = 'EDITCHOOSEPLAN_REQUEST_FAILURE';
const SETEMPLATEPLAN_REQUEST_SUCCESS = 'SETEMPLATEPLAN_REQUEST_SUCCESS';
const SETEMPLATEPLAN_REQUEST_FAILURE = 'SETEMPLATEPLAN_REQUEST_FAILURE';
const GETTEMPLATEPLAN_REQUEST_SUCCESS = 'GETTEMPLATEPLAN_REQUEST_SUCCESS';
const GETTEMPLATEPLAN_REQUEST_FAILURE = 'GETTEMPLATEPLAN_REQUEST_FAILURE';
const GETBENEFITPLAN_REQUEST_SUCCESS = 'GETBENEFITPLAN_REQUEST_SUCCESS';
const GETBENEFITPLAN_REQUEST_FAILURE = 'GETBENEFITPLAN_REQUEST_FAILURE';
const SETBENEFITPLAN_REQUEST_SUCCESS = 'SETBENEFITPLAN_REQUEST_SUCCESS';
const SETBENEFITPLAN_REQUEST_FAILURE = 'SETBENEFITPLAN_REQUEST_FAILURE';
const SETTIMEOUT_REQUEST_SUCCESS = 'SETTIMEOUT_REQUEST_SUCCESS';
const SETTIMEOUT_REQUEST_FAILURE = 'SETTIMEOUT_REQUEST_FAILURE';

/**
 * Actions
 */
export function choosePlanSuccess(data) {
  return { type: CHOOSEPLAN_REQUEST_SUCCESS, data };
}

export function choosePlanFailure(data) {
  return { type: CHOOSEPLAN_REQUEST_FAILURE, data };
}

// export function editChoosePlanSuccess(data) {
//   return { type: EDITCHOOSEPLAN_REQUEST_SUCCESS, data };
// }

// export function editChoosePlanFailure(data) {
//   return { type: EDITCHOOSEPLAN_REQUEST_FAILURE, data };
// }

export function setTemplatePlanSuccess(data) {
  return { type: SETEMPLATEPLAN_REQUEST_SUCCESS, data };
}

export function setTemplatePlanFailure(data) {
  return { type: SETEMPLATEPLAN_REQUEST_FAILURE, data };
}

export function getTemplatePlanSuccess(data) {
  return { type: GETTEMPLATEPLAN_REQUEST_SUCCESS, data };
}

export function getTemplatePlanFailure(data) {
  return { type: GETTEMPLATEPLAN_REQUEST_FAILURE, data };
}

export function getBenefitPlanSuccess(data) {
  return { type: GETBENEFITPLAN_REQUEST_SUCCESS, data };
}

export function getBenefitPlanFailure(data) {
  return { type: GETBENEFITPLAN_REQUEST_FAILURE, data };
}

export function setBenefitPlanSuccess(data) {
  return { type: SETBENEFITPLAN_REQUEST_SUCCESS, data };
}

export function setBenefitPlanFailure(data) {
  return { type: SETBENEFITPLAN_REQUEST_FAILURE, data };
}
export function setTimeoutSuccess(data) {
  return { type: SETTIMEOUT_REQUEST_SUCCESS, data };
}
export function setTimeoutFailure(data) {
  return { type: SETTIMEOUT_REQUEST_FAILURE, data };
}
export function getInsurancePlanSuccess(data) {
  return { type: GETINSURANCEPLAN_REQUEST_SUCCESS, data };
}
export function getInsurancePlanFailure(data) {
  return { type: GETINSURANCEPLAN_REQUEST_FAILURE, data };
}

/**
 * Reducer
 */
export function choosePlan(state = defaultPlan, action) {
  switch (action.type) {
    case CHOOSEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { choosePlan: action.data.plan });
    case CHOOSEPLAN_REQUEST_FAILURE:
      return state;
    // case EDITCHOOSEPLAN_REQUEST_SUCCESS:
    //   return Object.assign({}, state, { choosePlan: action.data.plan });
    // case EDITCHOOSEPLAN_REQUEST_FAILURE:
    //   return state;
    case SETEMPLATEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        health: action.data.health,
        isHealth: action.data.isHealth,
        expense: action.data.expense,
        isExpense: action.data.isExpense,
      });
    case SETEMPLATEPLAN_REQUEST_FAILURE:
      return state;
    case GETTEMPLATEPLAN_REQUEST_SUCCESS:
      // const choosePlan = action.data.plan.master.concat(action.data.plan.insurer);
      return Object.assign({}, state, {
        detailPlan: action.data._id,
        choosePlan: action.data.plan,
        health: action.data.health,
        isHealth: action.data.isHealth,
        expense: action.data.expense,
        isExpense: action.data.isExpense,
      });
    case GETTEMPLATEPLAN_REQUEST_FAILURE:
      return state;
    case GETINSURANCEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { insurancePlan: action.data.plan });
    case GETINSURANCEPLAN_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}

export function benefitPlan(state = defaultBenefitPlan, action) {
  switch (action.type) {
    case GETBENEFITPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        plan: action.data,
        timeout: action.data.timeout,
      });
    case GETBENEFITPLAN_REQUEST_FAILURE:
      return state;
    case SETBENEFITPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        plan: action.data,
      });
    case SETBENEFITPLAN_REQUEST_FAILURE:
      return state;
    case SETTIMEOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        timeout: action.data.timeout,
      });
    case SETTIMEOUT_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
