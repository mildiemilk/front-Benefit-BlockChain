/**
 * Default State
 */
const defaultCustomer = {
  customer: [],
  customerPlan: {},
};

/**
 * Action Constansts
 */
const CUSTOMER_REQUEST_SUCCESS = 'CUSTOMER_REQUEST_SUCCESS';
const CUSTOMER_PLAN_REQUEST_SUCCESS = 'CUSTOMER_PLAN_REQUEST_SUCCESS';
const CUSTOMER_REQUEST_FAILURE = 'CUSTOMER_REQUEST_FAILURE';
const CUSTOMER_PLAN_REQUEST_FAILURE = 'CUSTOMER_PLAN_REQUEST_FAILURE';

/**
 * Actions
 */
export function getCustomerSuccess(data) {
  return { type: CUSTOMER_REQUEST_SUCCESS, data };
}

export function getCustomerFailure(data) {
  return { type: CUSTOMER_REQUEST_FAILURE, data };
}
export function getCustomerPlanSuccess(data) {
  return { type: CUSTOMER_PLAN_REQUEST_SUCCESS, data };
}

export function getCustomerPlanFailure(data) {
  return { type: CUSTOMER_PLAN_REQUEST_FAILURE, data };
}

export function customerReducer(state = defaultCustomer, action) {
  switch (action.type) {
    case CUSTOMER_REQUEST_SUCCESS:
      return Object.assign({}, state, { customer: action.data });
    case CUSTOMER_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
export function customerPlanReducer(state = defaultCustomer, action) {
  switch (action.type) {
    case CUSTOMER_PLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { customerPlan: action.data });
    case CUSTOMER_PLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
