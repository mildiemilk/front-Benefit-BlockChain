import { APIRequest } from '../';


import {
  getCustomerSuccess,
  getCustomerPlanSuccess,
  getCustomerFailure,
  getCustomerPlanFailure,
} from '../../reducers/Insurer/customer';

const CUSTOMER_URI = '/api/insurer/customer';
const CUSTOMER_PLAN_URI = '/api/insurer/customer-plan';

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
