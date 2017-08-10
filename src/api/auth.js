import { APIRequest } from '.';
import {
  authenticateSuccess,
  signupFailure,
  authenticateFailure,
} from '../reducers/auth';

const LOGIN_URI = '/api/login';
const REGISTER_URI = 'api/register';

export function authenticate(email, password) {
  return dispatch => {
    const options = {
      method: 'post',
      url: LOGIN_URI,
      data: { email, password },
    };

    APIRequest(options, false)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        dispatch(authenticateSuccess(res.data));
        if (res.data.role === 'HR') {
          if (res.data.Havecompany != null && res.data.Approve === true) {
            window.location.href = '/dashboard';
          } else if (
            res.data.Havecompany != null &&
            res.data.Approve === false
          ) {
            window.location.href = '/confirm_identity';
          } else {
            window.location.href = '/settingprofile';
          }
        } else if (res.data.role === 'Employee') {
          if (res.data.Approve === true) {
            window.location.href = '/employeeverify';
          }
        }
      })
      .catch(err => {
        dispatch(authenticateFailure(err.response.data));
      });
  };
}

export function register(email, confirmPassword, password, role) {
  return dispatch => {
    const options = {
      method: 'post',
      url: REGISTER_URI,
      data: { email, password, confirmPassword, role },
    };
    APIRequest(options, false)
      .then(() => {
        window.location.href = '/login';
      })
      .catch(err => {
        dispatch(signupFailure(err.response.data));
      });
  };
}

export function logout() {
  return () => {
    localStorage.clear();
    window.location = '/login';
  };
}

export default {
  authenticate,
};
