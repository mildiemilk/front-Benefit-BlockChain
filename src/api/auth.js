import { APIRequest } from '.'
import {
  authenticateSuccess,
  signupFailure,
  authenticateFailure,
} from '../reducers/auth'

const LOGIN_URI = '/api/login'
const LOGOUT_URI = 'api/logout'
const REGISTER_URI = 'api/register'

export function authenticate(email, password) {
  return dispatch => {
    const options = {
      method: 'post',
      url: LOGIN_URI,
      data: { email, password },
    }

    APIRequest(options, false)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch(authenticateSuccess(res.data))
        window.location.href = '/settingprofile'
      })
      .catch(err => {
        dispatch(authenticateFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export function register(email, confirmPassword, password, role) {
  return dispatch => {
    const options = {
      method: 'post',
      url: REGISTER_URI,
      data: { email, password, confirmPassword, role },
    }
    APIRequest(options, false)
      .then(res => {
        window.location.href = '/login'
      })
      .catch(err => {
        dispatch(signupFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export function logout() {
  return dispatch => {
    const options = {
      method: 'get',
      url: LOGOUT_URI,
    }

    APIRequest(options).then(() => {
      dispatch(logoutRequestSuccess())
      window.location = '/login'
    })
  }
}

export default {
  authenticate,
}
