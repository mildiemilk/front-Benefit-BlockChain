import { APIRequest } from '../';


import {
  getCompanyClaimSuccess,
  getCompanyClaimFailure,
  getClaimSuccess,
  getClaimFailure,
} from '../../reducers/Insurer/claim';

const ALL_CLAIM_URI = 'api/insurer/claim-all-company';
const CLAIM_URI = 'api/insurer/get-claim';

export function getCompanyClaim() {
  return dispatch => {
    const options = {
      method: 'get',
      url: ALL_CLAIM_URI,
    };
    APIRequest(options, true)
      .then(res => {
        console.log()
        console.log('-res--', res);
        dispatch(getCompanyClaimSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompanyClaimFailure(err));
      });
  };
}
export function getClaim() {
  return dispatch => {
    const options = {
      method: 'get',
      url: CLAIM_URI,
    };
    APIRequest(options, true)
      .then(res => {
        console.log()
        console.log('-res--', res);
        dispatch(getClaimSuccess(res.data));
      })
      .catch(err => {
        dispatch(getClaimFailure(err));
      });
  };
}
