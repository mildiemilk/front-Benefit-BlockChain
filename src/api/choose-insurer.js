import { APIRequest } from '.'
import {
  chooseInsurerSuccess,
  setTimeOutSuccess,
  getAllInsurerSuccess,
  getSelectInsurerSuccess,
} from '../reducers/choose-insurer'

const CHOOSEINSURER_URI = '/api/chooseInsurer'
const SETTIMEOUT_URI = '/api/setTimeout'
const GETALLINSURER_URI = '/api/getAllInsurer'
const GETSELECTINSURER_URI = '/api/getSelectInsurer'

export function chooseInsurer(insurers) {
  return dispatch => {
    const options = {
      method: 'put',
      url: CHOOSEINSURER_URI,
      data: { insurers },
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(chooseInsurerSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export function getSelectInsurer() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETSELECTINSURER_URI,
    }
    APIRequest(options, true)
      .then(res => {
        dispatch(getSelectInsurerSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export function getAllInsurer() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETALLINSURER_URI,
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(getAllInsurerSuccess(res.data))
      })
      .catch(err => {
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
        dispatch(setTimeOutSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}
