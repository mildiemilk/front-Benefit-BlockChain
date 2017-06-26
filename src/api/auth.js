import { APIRequest } from '.'

const LOGIN_URI = '/api/login'
const LOGOUT_URI = 'api/logout'
const SIGN_UP = 'api/s'

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
