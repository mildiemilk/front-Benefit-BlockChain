import { APIRequest } from '.'

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
      })
      .catch(err => console.log(err.response))
  }
}

export function register(email, confirmPassword, password) {
  return dispatch => {
    const options = {
      method: 'post',
      url: REGISTER_URI,
      data: { email, password, confirmPassword },
    }

    APIRequest(options, false)
      .then(res => {
        console.log(response)
      })
      .catch(err => console.log(err.response))
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
