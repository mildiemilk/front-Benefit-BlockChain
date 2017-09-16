import { APIRequest } from '.';
import {
  updatePersonalDetailSuccess,
  updatePersonalDetailFailure,
} from '../reducers/user';

const UPDATE_PERSONALDETAIL = '/api/employee/updatePersonalDetails';

export function updatePersonalDetails(personalEmail, phone) {
  return dispatch => {
    const options = {
      method: 'put',
      url: UPDATE_PERSONALDETAIL,
      data: { personalEmail, phone },
    };
    APIRequest(options, true)
      .then(res => {
        window.location.href = '/plan';
        dispatch(updatePersonalDetailSuccess(res.data));
      })
      .catch(err => {
        dispatch(updatePersonalDetailFailure(err));
      });
  };
}
