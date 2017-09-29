import { APIRequest } from '../';


import {
  getCustomerSuccess,
  getCustomerPlanSuccess,
  getCustomerEmployeeSuccess,
  getCustomerSelectPlanSuccess,
  getCustomerFileSuccess,
  getCustomerFailure,
  getCustomerPlanFailure,
  getCustomerEmployeeFailure,
  getCustomerFileFailure,
  getCustomerSelectPlanFailure,
} from '../../reducers/Insurer/customer';

const CUSTOMER_URI = '/api/insurer/customer';
const CUSTOMER_PLAN_URI = '/api/insurer/customer-plan';
const CUSTOMER_EMP_URI = '/api/insurer/customer-employee';
const CUSTOMER_SELECT_PLAM_URI = '/api/insurer/customer-select-plan';
const CUSTOMER_FILE_URI = '/api/insurer/customer-file';

export function getCustomer() {
  return dispatch => {
    const options = {
      method: 'get',
      url: CUSTOMER_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCustomerSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCustomerFailure(err));
      });
  };
}
export function getCustomerPlan(companyId) {
  return dispatch => {
    const options = {
      method: 'get',
      url: `${CUSTOMER_PLAN_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCustomerPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCustomerPlanFailure(err));
      });
  };
}
export function getCustomerEmployee(companyId) {
  return dispatch => {
    const options = {
      method: 'get',
      url: `${CUSTOMER_EMP_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCustomerEmployeeSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCustomerEmployeeFailure(err));
      });
  };
}
export function getCustomerFile(companyId) {
  return dispatch => {
    const options = {
      method: 'get',
      url: `${CUSTOMER_FILE_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCustomerFileSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCustomerFileFailure(err));
      });
  };
}
export function getCustomerSelectPlan(companyId) {
  return dispatch => {
    const options = {
      method: 'get',
      url: `${CUSTOMER_SELECT_PLAM_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCustomerSelectPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCustomerSelectPlanFailure(err));
      });
  };
}
