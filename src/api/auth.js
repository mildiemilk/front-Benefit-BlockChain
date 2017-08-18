import { APIRequest } from '.';
import {
  authenticateSuccess,
  signupFailure,
  authenticateFailure,
  updatePasswordSuccess,
  updatePasswordFailure,
} from '../reducers/auth';

const LOGIN_URI = '/api/login';
const REGISTER_URI = 'api/register';
const UPDATE_PASSWORD = 'api/user/change-password';

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
        localStorage.setItem('companyName', res.data.companyName);
        localStorage.setItem('logo', res.data.logo);
        dispatch(authenticateSuccess(res.data));
        if (res.data.role === 'HR') {
          if (res.data.companyName !== '' && res.data.Approve === true) {
            window.location.href = '/dashboard';
          } else if (
            res.data.companyName !== '' &&
            res.data.Approve === false
          ) {
            window.location.href = '/confirm_identity';
          } else {
            window.location.href = '/settingprofile';
          }
        } else if (res.data.role === 'Employee') {
          if (res.data.Approve === true) {
            if (!res.data.personalVerify) {
              window.location.href = '/employeeverify';
            } else {
              window.location.href = '/flexyplan';
            }
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
    const role = localStorage.getItem('role');
    localStorage.clear();
    if (role === 'Employee') {
      window.location = '/employeelogin';
    } else {
      window.location = '/login';
    }
  };
}

export function updatePassword(password, confirmPassword) {
  return dispatch => {
    const options = {
      method: 'put',
      url: UPDATE_PASSWORD,
      data: { password, confirmPassword },
    };
    APIRequest(options, true)
      .then(res => {
        // window.location.href = '/'
        // console.log('Update Password Success!')
        dispatch(updatePasswordSuccess(res.data));
      })
      .catch(err => {
        dispatch(updatePasswordFailure(err.response.data));
      });
  };
}

export default {
  authenticate,
};
