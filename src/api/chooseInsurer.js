import { APIRequest } from '.'
import {
  chooseInsurerSuccess,
  chooseInsurerFailure,
  setTimeOutFailure,
  setTimeOutSuccess,
  getAllInsurerSuccess,
  getALLInsurerFailure,
} from '../reducers/chooseInsurer'

const CHOOSEINSURER_URI = '/api/chooseInsurer'
const SETTIMEOUT_URI = '/api/setTimeout'
const GETALLINSURER_URI = '/api/getAllInsurer'

export function chooseInsurer(Insurers) {
  return dispatch => {
    const options = {
      method: 'put',
      url: CHOOSEINSURER_URI,
      data: { Insurers },
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
        dispatch(chooseInsurerSuccess(res.data))
      })
      .catch(err => {
        // dispatch(chooseInsurerFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export function getAllInsurer() {
  return dispatch => {
    const option = {
      method: 'GET',
      url: GETALLINSURER_URI,
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(getAllInsurerSuccess(res.data))
      })
      .catch(err => {
        // dispatch(getAllInsurerFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export function setTimeOut(timeout) {
  return dispatch => {
    const options = {
      method: 'put',
      url: SETTIMEOUT_URI,
      data: { timeout },
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
        dispatch(setTimeOutSuccess(res.data))
      })
      .catch(err => {
        dispatch(setTimeOutFailure(err.response.data))
        console.log(err.response)
      })
  }
}
