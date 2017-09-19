/**
 * Default State
 */
const defaultCustomer = {
  customer: [],
};

/**
 * Action Constansts
 */
const CUSTOMER_REQUEST_SUCCESS = 'CUSTOMER_REQUEST_SUCCESS';
const CUSTOMER_REQUEST_FAILURE = 'CUSTOMER_REQUEST_FAILURE';

/**
 * Actions
 */
export function getCustomerSuccess(data) {
  return { type: CUSTOMER_REQUEST_SUCCESS, data };
}

export function getCustomerFailure(data) {
  return { type: CUSTOMER_REQUEST_FAILURE, data };
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

