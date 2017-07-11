import axios from 'axios'
import auth from './auth'
import profileCompany from './profileCompany'
import { chooseInsurer, setTimeOut, getAllInsurer } from './chooseInsurer'
import { endTimeout, bidding }  from './bidding'

export function APIRequest(options, authenticate = true) {
  const headers = options.headers ? options.headers : {}
  const authorization = authenticate
    ? { Authorization: `${localStorage.getItem('token')}` }
    : {}
  const defaultOption = {
    baseURL: 'http://chonthichas-macbook-air.local:59916',
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
}
