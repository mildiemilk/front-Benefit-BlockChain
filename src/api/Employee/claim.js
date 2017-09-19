import { APIRequest } from '../';


import {
  getClaimStatusSuccess,
  getClaimStatusFailure,
} from '../../reducers/Employee/claim';

const CREATE_CLAIM_URI = '/api/employee/claim';
const GET_CLAIM_STATUS_URI = '/api/employee/get-claim-status';


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
  // formData.append('files', files);
  formData.append('detail', JSON.stringify(detail));
  console.log('api claim detail: ', detail);
  console.log('api claim files: ', files);
  console.log('api claim type: ', type);
  const options = {
    method: 'post',
    url: `${CREATE_CLAIM_URI}/${type}`,
    data: formData,
  };
  return APIRequest(options, true);
}
