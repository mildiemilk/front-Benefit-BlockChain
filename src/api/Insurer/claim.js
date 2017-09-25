import { APIRequest } from '../';


import {
  getCompanyClaimSuccess,
  getCompanyClaimFailure,
  getClaimSuccess,
  getClaimFailure,
} from '../../reducers/Insurer/claim';

const ALL_CLAIM_URI = 'api/insurer/claim-all-company';
const CLAIM_URI = 'api/insurer/get-claim';
const CLAIM_UPDATE_STATUS_URI = '/api/insurer/claim';

export function updateStatusClaim(status, claimId) {
  console.log('claimId', claimId);
  return () => {
    const options = {
      method: 'put',
      url: `${CLAIM_UPDATE_STATUS_URI}/${status}/${claimId}`,
    };
    APIRequest(options, true)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
}
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
export function getClaim(companyId) {
  console.log('companyId==', companyId);
  return dispatch => {
    const options = {
      method: 'get',
      url: `${CLAIM_URI}/59af536b6933f11d9f6b7394`,
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
