import axios from 'axios';
import auth from './auth';
import {
  setLogo,
  fileEmployee,
  getTemplate,
  claimData,
  getGroupBenefit,
  employeeDetail,
  getFileEmployee,
  deleteEmployee,
  summaryInsurancePlan,
  editEmployee,
} from './profile-company';
import {
  chooseInsurer,
  setTimeOut,
  getTimeout,
  getAllInsurer,
  getSelectInsurer,
} from './choose-insurer';
import { endTimeout, bidding } from './bidding';
import { menuPlans } from './set-plan';
import {
  getInsurancePlan,
  choosePlan,
  getOptionPlan,
  setTimeout,
} from './benefit-plan';
import { chooseFinalInsurer } from './bidding';
import { host, protocol, port } from '../../config/';

export function APIRequest(options, authenticate = true) {
  const headers = options.headers ? options.headers : {};
  const authorization = authenticate
    ? { Authorization: `${localStorage.getItem('token')}` }
    : {};
  const defaultOption = {
    baseURL: `${protocol}://${host}:${port}`,
    headers: Object.assign(
      {},
      { 'Content-Type': 'application/json' },
      headers,
      authorization,
    ),
  };
  const mergedOption = Object.assign({}, options, defaultOption);

  return axios(mergedOption);
}

export default {
  auth,
  APIRequest,
  setLogo,
  fileEmployee,
  claimData,
  employeeDetail,
  chooseInsurer,
  setTimeOut,
  getTimeout,
  getAllInsurer,
  endTimeout,
  bidding,
  menuPlans,
  choosePlan,
  getInsurancePlan,
  getSelectInsurer,
  chooseFinalInsurer,
  getOptionPlan,
  setTimeout,
  getTemplate,
  getGroupBenefit,
  getFileEmployee,
  deleteEmployee,
  summaryInsurancePlan,
  editEmployee,
};
