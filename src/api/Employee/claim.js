import { APIRequest } from '../';
import {
  getClaimStatusSuccess,
  getClaimStatusFailure,
  getClaimHistorySuccess,
  getClaimHistoryFailure,
  claimOptionSuccess,
  claimOptionFailure,
} from '../../reducers/Employee/claim';

const CREATE_CLAIM_URI = '/api/employee/claim';
const GET_CLAIM_STATUS_URI = '/api/employee/get-claim-status';
const GET_CLAIM_HISTORY_URI = '/api/employee/get-claim-history';
const CLAIM_OPTION_URL = '/api/employee/claim-option';

export function claimOption() {
  return dispatch => {
    const options = {
      method: 'get',
      url: CLAIM_OPTION_URL,
    };
    APIRequest(options, true)
      .then(res => {
        // console.log('resapi: ', res);
        dispatch(claimOptionSuccess(res.data));
      })
      .catch(err => {
        // console.log('errapi: ', err);
        dispatch(claimOptionFailure(err));
      });
  };
}

export function getClaimHistory() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_CLAIM_HISTORY_URI,
    };
    APIRequest(options, true)
    .then(res => {
      dispatch(getClaimHistorySuccess(res.data));
    })
    .catch(err => {
      dispatch(getClaimHistoryFailure(err.response.data));
    });
  };
}

export function getClaimStatus() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_CLAIM_STATUS_URI,
    };
    APIRequest(options, true)
    .then(res => {
      dispatch(getClaimStatusSuccess(res.data));
    })
    .catch(err => {
      dispatch(getClaimStatusFailure(err.response.data));
    });
  };
}

export function claim(detail, files, type) {
  const formData = new FormData();
  files.map((file, index) => (
    formData.append('files', files[index])
  ));
  formData.append('detail', JSON.stringify(detail));
  const options = {
    method: 'post',
    url: `${CREATE_CLAIM_URI}/${type}`,
    data: formData,
  };
  return APIRequest(options, true);
}
