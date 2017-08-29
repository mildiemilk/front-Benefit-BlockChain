import axios from 'axios';
import auth from './auth';
import { profileCompany, setLogo, fileEmployee, claimData, employeeDetail, getTemplate } from './profile-company';
import {
  chooseInsurer,
  setTimeOut,
  getTimeout,
  getAllInsurer,
  getSelectInsurer,
} from './choose-insurer';
import { endTimeout, bidding } from './bidding';
import { menuPlans } from './set-plan';
import { choosePlan, getOptionPlan, setTimeout } from './benefit-plan';
import { chooseFinalInsurer } from './bidding';

export function APIRequest(options, authenticate = true) {
  const headers = options.headers ? options.headers : {};
  const authorization = authenticate
    ? { Authorization: `${localStorage.getItem('token')}` }
    : {};
  const defaultOption = {
    baseURL: 'http://localhost:8000',
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
  profileCompany,
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
  getSelectInsurer,
  chooseFinalInsurer,
  getOptionPlan,
  setTimeout,
  getTemplate,
};
