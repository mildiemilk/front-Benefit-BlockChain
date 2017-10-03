import FileSaver from 'file-saver';
import { APIRequest } from '../';

import {
  getCustomerSuccess,
  getCustomerPlanSuccess,
  getCustomerEmployeeSuccess,
  getCustomerSelectPlanSuccess,
  putEmpDataSuccess,
  getCustomerFailure,
  getCustomerPlanFailure,
  getCustomerEmployeeFailure,
  putEmpDataFailure,
  getCustomerSelectPlanFailure,
} from '../../reducers/Insurer/customer';

const CUSTOMER_URI = '/api/insurer/customer';
const CUSTOMER_PLAN_URI = '/api/insurer/customer-plan';
const CUSTOMER_EMP_URI = '/api/insurer/customer-employee';
const CUSTOMER_SELECT_PLAM_URI = '/api/insurer/customer-select-plan';
const CUSTOMER_FILE_URI = '/api/insurer/customer-file';
const CUSTOMER_UPFILE_URI = '/api/insurer/customer-upload-file';
const CUSTOMER_EDIT_POLICY_URI = '/api/insurer/customer-edit-policy';

export function editPolicy(employeeId, policyNumber, memberNumber) {
  const options = {
    method: 'put',
    url: CUSTOMER_EDIT_POLICY_URI,
    data: { employeeId, policyNumber, memberNumber },
  };
  return APIRequest(options, true);
}
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

export function putUploadEmpData(file, companyId) {
  const formData = new FormData();
  formData.append('file', file);
  return dispatch => {
    const options = {
      method: 'put',
      url: `${CUSTOMER_UPFILE_URI}/${companyId}`,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(putEmpDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(putEmpDataFailure(err.response.message));
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
  return () => {
    const options = {
      method: 'get',
      url: `${CUSTOMER_FILE_URI}/${companyId}`,
      responseType: 'blob',
    };
    APIRequest(options, true)
      .then(res => {
        FileSaver.saveAs(res.data, 'EmployeeData.xlsx');
      })
      .catch(err => {
        console.log(err);
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
