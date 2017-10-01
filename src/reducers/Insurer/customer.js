/**
 * Default State
 */
const defaultCustomer = {
  customer: [],
  customerPlan: { master: [], insurer: [] },
  customerSelectPlan: [],
  customerEmployee: { employees: [], summary: null },
  customerFile: null,
  putUploadEmpData: '',
  message: null,
  error: false,
};

/**
 * Action Constansts
 */
const CUSTOMER_REQUEST_SUCCESS = 'CUSTOMER_REQUEST_SUCCESS';
const CUSTOMER_PLAN_REQUEST_SUCCESS = 'CUSTOMER_PLAN_REQUEST_SUCCESS';
const CUSTOMER_FILE_REQUEST_SUCCESS = 'CUSTOMER_FILE_REQUEST_SUCCESS';
const CUSTOMER_EMP_REQUEST_SUCCESS = 'CUSTOMER_EMP_REQUEST_SUCCESS';
const CUSTOMER_SELECT_PLAN_REQUEST_SUCCESS = 'CUSTOMER_SELECT_PLAN_REQUEST_SUCCESS';
const CUSTOMER_REQUEST_FAILURE = 'CUSTOMER_REQUEST_FAILURE';
const CUSTOMER_PLAN_REQUEST_FAILURE = 'CUSTOMER_PLAN_REQUEST_FAILURE';
const CUSTOMER_FILE_REQUEST_FAILURE = 'CUSTOMER_FILE_REQUEST_FAILURE';
const CUSTOMER_EMP_REQUEST_FAILURE = 'CUSTOMER_EMP_REQUEST_FAILURE';
const CUSTOMER_SELECT_PLAN_REQUEST_FAILURE = 'CUSTOMER_SELECT_PLAN_REQUEST_FAILURE';
const FILEEMPLOYEE_REQUEST_SUCCESS = 'FILEEMPLOYEE_REQUEST_SUCCESS';
const FILEEMPLOYEE_REQUEST_FAILURE = 'FILEEMPLOYEE_REQUEST_FAILURE';

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
export function getCustomerSelectPlanSuccess(data) {
  return { type: CUSTOMER_SELECT_PLAN_REQUEST_SUCCESS, data };
}

export function getCustomerSelectPlanFailure(data) {
  return { type: CUSTOMER_SELECT_PLAN_REQUEST_FAILURE, data };
}
export function getCustomerEmployeeSuccess(data) {
  return { type: CUSTOMER_EMP_REQUEST_SUCCESS, data };
}

export function getCustomerEmployeeFailure(data) {
  return { type: CUSTOMER_EMP_REQUEST_FAILURE, data };
}
export function getCustomerFileSuccess(data) {
  return { type: CUSTOMER_FILE_REQUEST_SUCCESS, data };
}

export function getCustomerFileFailure(data) {
  return { type: CUSTOMER_FILE_REQUEST_FAILURE, data };
}
export function putUploadEmpDataSuccess(data) {
  return { type: FILEEMPLOYEE_REQUEST_SUCCESS, data };
}
export function putUploadEmpDataFailure(data) {
  return { type: FILEEMPLOYEE_REQUEST_FAILURE, data };
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
export function customerEmployeeReducer(state = defaultCustomer, action) {
  switch (action.type) {
    case CUSTOMER_EMP_REQUEST_SUCCESS:
      return Object.assign({}, state, { customerEmployee: action.data });
    case CUSTOMER_EMP_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
export function customerFileReducer(state = defaultCustomer, action) {
  switch (action.type) {
    case CUSTOMER_FILE_REQUEST_SUCCESS:
      return Object.assign({}, state, { customerFile: action.data });
    case CUSTOMER_FILE_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
export function customerSelectPlanReducer(state = defaultCustomer, action) {
  switch (action.type) {
    case CUSTOMER_SELECT_PLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { customerSelectPlan: action.data });
    case CUSTOMER_SELECT_PLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
export default function customer(state = defaultCustomer, action) {
  switch (action.type) {
    case FILEEMPLOYEE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        putUploadEmpData: action.data.putUploadEmpData,
      });
    case FILEEMPLOYEE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    default:
      return state;
  }
}
