const defaultInsurer = {
  defaultInsurer: [],
}
const defaultAllInsurer = []
const defaultTimeOut = {
  timeout: null,
}

const requestStatus = {
  success: 'SUCCESS',
  request: 'REQUEST',
  failed: 'FAILED',
}

const CHOOSEINSURER_REQUEST_SUCCESS = 'CHOOSEINSURER_REQUEST_SUCCESS'
const CHOOSEINSURER_REQUEST_FAILURE = 'CHOOSEINSURER_REQUEST_FAILURE'
const SETTIMEOUT_REQUEST_SUCCESS = 'SETTIMEOUT_REQUEST_SUCCESS'
const SETTIMEOUT_REQUEST_FAILURE = 'SETTIMEOUT_REQUEST_FAILURE'
const GETTIMEOUT_REQUEST_SUCCESS = 'GETTIMEOUT_REQUEST_SUCCESS'
const GETTIMEOUT_REQUEST_FAILURE = 'GETTIMEOUT_REQUEST_FAILURE'
const GETALLINSURER_REQUEST_SUCCESS = 'GETALLINSURER_REQUEST_SUCCESS'
const GETALLINSURER_REQUEST_FAILURE = 'GETALLINSURER_REQUEST_FAILURE'
const GETSELECTINSURER_REQUEST_SUCCESS = 'GETSELECTINSURER_REQUEST_SUCCESS'
const GETSELECTINSURER_REQUEST_FAILURE = 'GETSELECTINSURER_REQUEST_FAILURE'

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
export function getTimeoutSuccess(data) {
  return { type: GETTIMEOUT_REQUEST_SUCCESS, data }
}
export function getTimeoutFailure(data) {
  return { type: GETTIMEOUT_REQUEST_FAILURE, data }
}
export function getAllInsurerSuccess(data) {
  return { type: GETALLINSURER_REQUEST_SUCCESS, data }
}
export function getAllInsurerFailure(data) {
  return { type: GETALLINSURER_REQUEST_FAILURE, data }
}
export function getSelectInsurerSuccess(data) {
  return { type: GETSELECTINSURER_REQUEST_SUCCESS, data }
}
export function getSelectInsurerFailure(data) {
  return { type: GETSELECTINSURER_REQUEST_FAILURE, data }
}

export function chooseInsurerReducer(state = defaultInsurer, action) {
  switch (action.type) {
    case CHOOSEINSURER_REQUEST_SUCCESS:
      return Object.assign({}, state, { defaultInsurer: action.data })
    case CHOOSEINSURER_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}

export function getSelectInsurer(state = defaultInsurer, action) {
  switch (action.type) {
    case GETSELECTINSURER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        defaultInsurer: action.data,
        requestDone: true,
      })
    case GETSELECTINSURER_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
export function chooseInsurerReducerStatus(state, action) {
  switch (action.type) {
    case CHOOSEINSURER_REQUEST_SUCCESS:
      return requestStatus.success
    case CHOOSEINSURER_REQUEST_FAILURE:
      return requestStatus.failed
    default:
      return requestStatus.request
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
    case GETTIMEOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        timeout: action.data,
      })
    case GETALLINSURER_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}

export function getAllInsurer(state = defaultAllInsurer, action) {
  switch (action.type) {
    case GETALLINSURER_REQUEST_SUCCESS:
      return action.data
    case GETALLINSURER_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
