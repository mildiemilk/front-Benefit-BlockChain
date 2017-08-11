import { APIRequest } from '.';
import {
  updatePersonalDetailSuccess,
  updatePersonalDetailFailure,
} from '../reducers/user';

const UPDATE_PERSONALDETAIL = '/api/user/updatePersonalDetails';

export function updatePersonalDetails(personalEmail, phone) {
  return dispatch => {
    const options = {
      method: 'put',
      url: UPDATE_PERSONALDETAIL,
      data: { personalEmail, phone },
    };
    // console.log('in api personalDetail')
    APIRequest(options, true)
      .then(res => {
        window.location.href = '/flexyplan';
        // console.log('in api personalDetail then')
        dispatch(updatePersonalDetailSuccess(res.data));
        // console.log('Update Password Success!')
      })
      .catch(err => {
        // console.log('in api personalDetail catch')
        dispatch(updatePersonalDetailFailure(err.response.data));
      });
  };
}
