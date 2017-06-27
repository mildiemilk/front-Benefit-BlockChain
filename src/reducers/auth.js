/**
 * Default State
 */
const defaultAuth = {
  user: null,
  token: localStorage.getItem('token'),
}

/**
 * Action Constansts
 */
const AUTHENTICATE_REQUEST_SUCCESS = 'auth/AUTHENTICATE_REQUEST_SUCCESS'
const AUTHENTICATE_REQUEST_FAILURE = 'auth/AUTHENTICATE_REQUEST_FAILURE'
const LOGOUT_REQUEST_SUCCESS = 'auth/LOGOUT_REQUEST_SUCCESS'

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

/**
 * Reducer
 */

export default function authReducer(state = defaultAuth, action) {
  switch (action.type) {
    case AUTHENTICATE_REQUEST_SUCCESS:
      return Object.assign({}, state, { token: action.data.token })
    default:
      return state
  }
}
