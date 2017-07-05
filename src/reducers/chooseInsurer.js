const defaultchooseInsurer = {
  message: null,
  error: false,
}
const defaultTimeOut = {
  time: null,
  date: null,
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
export function setTimeOutsFailure(data) {
  return { type: SETTIMEOUT_REQUEST_FAILURE, data }
}
export function chooseInsurerReducer(state = defaultchooseInsurer, action) {
  switch (action.type) {
    case CHOOSEINSURER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        message: action.data.message,
        error: false,
      })
    case CHOOSEINSURER_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}

export function setTimeOut(state = defaultTimeOut, action) {
  switch (action.type) {
    case SETTIMEOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        date: action.data.date,
        time: action.data.time,
      })
    case SETTIMEOUT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}
