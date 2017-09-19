import { APIRequest } from '../';


import {
  getCustomerSuccess,
  getCustomerFailure,
} from '../../reducers/Insurer/customer';

const CUSTOMER_URI = '/api/insurer/customer';

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
        dispatch(getCustomerFailure(err.response.data));
      });
  };
}
