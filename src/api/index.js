import axios from 'axios'
import auth from './auth'
import profileCompany from './profile-company'
import {
  chooseInsurer,
  setTimeOut,
  getAllInsurer,
  getSelectInsurer,
} from './choose-insurer'
import { endTimeout, bidding } from './bidding'
import { menuPlans } from './set-plan'
import { choosePlan } from './benefit-plan'
import { chooseFinalInsurer } from './bidding'

export function APIRequest(options, authenticate = true) {
  const headers = options.headers ? options.headers : {}
  const authorization = authenticate
    ? { Authorization: `${localStorage.getItem('token')}` }
    : {}
  const defaultOption = {
    baseURL: 'http://localhost:8000',
    headers: Object.assign(
      {},
      { 'Content-Type': 'application/json' },
      headers,
      authorization,
    ),
  }
  const mergedOption = Object.assign({}, options, defaultOption)

  return axios(mergedOption)
}

export default {
  auth,
  APIRequest,
  profileCompany,
  chooseInsurer,
  setTimeOut,
  getAllInsurer,
  endTimeout,
  bidding,
  menuPlans,
  choosePlan,
  getSelectInsurer,
  chooseFinalInsurer,
}
