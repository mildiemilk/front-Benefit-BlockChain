import { APIRequest } from '.';
import {
  chooseInsurerSuccess,
  chooseInsurerFailure,
  setTimeOutSuccess,
  setTimeOutFailure,
  getTimeoutSuccess,
  getTimeoutFailure,
  getAllInsurerSuccess,
  getAllInsurerFailure,
  getSelectInsurerSuccess,
  getSelectInsurerFailure,
} from '../reducers/choose-insurer';

const CHOOSEINSURER_URI = '/api/company/choose-insurer';
const SETTIMEOUT_URI = '/api/company/set-insurer-timeout';
const GETALLINSURER_URI = '/api/company/get-all-insurer';
const GETSELECTINSURER_URI = '/api/company/get-select-insurer';
const GETTIMEOUT_URI = '/api/company/get-insurer-timeout';

export function chooseInsurer(insurers) {
  return dispatch => {
    const options = {
      method: 'put',
      url: CHOOSEINSURER_URI,
      data: { insurers },
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(chooseInsurerSuccess(res.data));
      })
      .catch(err => {
        dispatch(chooseInsurerFailure(err.response.data));
      });
  };
}

export function getSelectInsurer() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETSELECTINSURER_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getSelectInsurerSuccess(res.data));
      })
      .catch(err => {
        dispatch(getSelectInsurerFailure(err.response.data));
      });
  };
}

export function getAllInsurer() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETALLINSURER_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getAllInsurerSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAllInsurerFailure(err.response.data));
      });
  };
}

export function setTimeOut(timeout) {
  return dispatch => {
    const options = {
      method: 'put',
      url: SETTIMEOUT_URI,
      data: { timeout },
    };

    APIRequest(options, true)
      .then(res => {
        console.log('res', res);
        dispatch(setTimeOutSuccess(res.data));
      })
      .catch(err => {
        dispatch(setTimeOutFailure(err.response.data));
      });
  };
}

export function getTimeout() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETTIMEOUT_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getTimeoutSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTimeoutFailure(err.response.data));
      });
  };
}
