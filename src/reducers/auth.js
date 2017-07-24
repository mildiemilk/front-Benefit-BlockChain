/**
 * Default State
 */
const defaultAuth = {
  user: null,
  token: localStorage.getItem('token'),
  role: null,
  message: '',
  error: false,
}

const defaultSignup = {
  message: null,
  error: false,
}

/**
 * Action Constansts
 */
const AUTHENTICATE_REQUEST_SUCCESS = 'auth/AUTHENTICATE_REQUEST_SUCCESS'
const AUTHENTICATE_REQUEST_FAILURE = 'auth/AUTHENTICATE_REQUEST_FAILURE'
const LOGOUT_REQUEST_SUCCESS = 'auth/LOGOUT_REQUEST_SUCCESS'
const SIGNUP_REQUEST_FAILURE = 'auth/SIGNUP_REQUEST_FAILURE'
const SIGNUP_REQUEST_SUCCESS = 'auth/SIGNUP_REQUEST_SUCCESS'

/**
 * Actions
 */
export function authenticateSuccess(data) {
  return { type: AUTHENTICATE_REQUEST_SUCCESS, data }
}

export function authenticateFailure(data) {
  return { type: AUTHENTICATE_REQUEST_FAILURE, data }
}

export function logoutRequestSuccess() {
  return { type: LOGOUT_REQUEST_SUCCESS }
}

export function signupFailure(data) {
  return { type: SIGNUP_REQUEST_FAILURE, data }
}

export function signupSuccess(data) {
  return { type: SIGNUP_REQUEST_SUCCESS, data }
}

export function authReducer(state = defaultAuth, action) {
  switch (action.type) {
    case AUTHENTICATE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        token: action.data.token,
        role: action.data.role,
        error: false,
      })
    case AUTHENTICATE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}

export function signupReducer(state = defaultSignup, action) {
  switch (action.type) {
    case SIGNUP_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    case SIGNUP_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        message: action.data.message,
        erroe: false,
      })
    default:
      return state
  }
}
