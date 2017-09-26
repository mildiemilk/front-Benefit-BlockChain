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

export function updateStatusClaim(status, claimId, reason) {
  console.log('claimId', claimId);
  const options = {
    method: 'put',
    url: `${CLAIM_UPDATE_STATUS_URI}/${status}/${claimId}`,
    data: {
      reason,
    },
  };
  return APIRequest(options, true);
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
      url: `${CLAIM_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getClaimSuccess(res.data));
      })
      .catch(err => {
        dispatch(getClaimFailure(err));
      });
  };
}
