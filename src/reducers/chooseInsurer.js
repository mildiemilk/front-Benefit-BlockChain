const defaultInsurer = []
const defaultTimeOut = {
  timeout: null,
}

const CHOOSEINSURER_REQUEST_SUCCESS = 'CHOOSEINSURER_REQUEST_SUCCESS'
const CHOOSEINSURER_REQUEST_FAILURE = 'CHOOSEINSURER_REQUEST_FAILURE'
const SETTIMEOUT_REQUEST_SUCCESS = 'SETTIMEOUT_REQUEST_SUCCESS'
const SETTIMEOUT_REQUEST_FAILURE = 'SETTIMEOUT_REQUEST_FAILURE'

export function chooseInsurerSuccess(data) {
  return { type: CHOOSEINSURER_REQUEST_SUCCESS, data }
}

export function chooseInsurerFailure(data) {
  return { type: CHOOSEINSURER_REQUEST_FAILURE, data }
}

export function setTimeOutSuccess(data) {
  return { type: SETTIMEOUT_REQUEST_SUCCESS, data }
}

export function setTimeOutFailure(data) {
  return { type: SETTIMEOUT_REQUEST_FAILURE, data }
}

export function chooseInsurerReducer(state = defaultInsurer, action) {
  switch (action.type) {
    case CHOOSEINSURER_REQUEST_SUCCESS:
      return action.data
    case CHOOSEINSURER_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}

export function setTimeOut(state = defaultTimeOut, action) {
  switch (action.type) {
    case SETTIMEOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        timeout: action.data,
      })
    case SETTIMEOUT_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
