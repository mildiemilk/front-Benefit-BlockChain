import { APIRequest } from '.';
import {
  getDataSuccess,
  getDataFailure,
} from '../reducers/admin';

const GET_DATA = 'api/query-claim';

export function getData() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_DATA,
    };
    APIRequest(options, false)
      .then(res => {
        dispatch(getDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(getDataFailure(err.response.data));
      });
  };
}
