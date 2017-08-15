/**
 * Default State
 */
const defaultPlan = {
  planList: [],
};
const comparePlan = JSON.parse(localStorage.getItem('comparePlan'));

/**
 * Action Constansts
 */
const CREATEPLAN_REQUEST_SUCCESS = 'CREATEPLAN_REQUEST_SUCCESS';
const CREATEPLAN_REQUEST_FAILURE = 'CREATEPLAN_REQUEST_FAILURE';
const EDITPLAN_REQUEST_SUCCESS = 'EDITPLAN_REQUEST_SUCCESS';
const EDITPLAN_REQUEST_FAILURE = 'EDITPLAN_REQUEST_FAILURE';
const GETALLPLAN_REQUEST_SUCCESS = 'GETALLPLAN_REQUEST_SUCCESS';
const GETALLPLAN_REQUEST_FAILURE = 'GETALLPLAN_REQUEST_FAILURE';
const MENUPLAN_REQUEST_SUSCESS = 'MENUPLAN_REQUEST_SUSCESS';

/**
 * Actions
 */
export function createPlanSuccess(data) {
  return { type: CREATEPLAN_REQUEST_SUCCESS, data };
}

export function createPlanFailure(data) {
  return { type: CREATEPLAN_REQUEST_FAILURE, data };
}

export function editPlanSuccess(data) {
  return { type: EDITPLAN_REQUEST_SUCCESS, data };
}

export function editPlanFailure(data) {
  return { type: EDITPLAN_REQUEST_FAILURE, data };
}

export function getAllPlanSuccess(data) {
  return { type: GETALLPLAN_REQUEST_SUCCESS, data };
}

export function getAllPlanFailure(data) {
  return { type: GETALLPLAN_REQUEST_FAILURE, data };
}

export function menuPlanSuccess(data) {
  return { type: MENUPLAN_REQUEST_SUSCESS, data };
}

/**
 * Reducer
 */
export function plan(state = defaultPlan, action) {
  switch (action.type) {
    case CREATEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {});
    case CREATEPLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    case EDITPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {});
    case EDITPLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    case GETALLPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { planList: action.data });
    case GETALLPLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export function menuplanReducer(state = comparePlan, action) {
  switch (action.type) {
    case MENUPLAN_REQUEST_SUSCESS:
      return action.data;
    default:
      return state;
  }
}
