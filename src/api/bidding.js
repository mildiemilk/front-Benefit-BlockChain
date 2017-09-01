import { APIRequest } from '.';
import {
  getBiddingSuccess,
  getBiddingFailure,
  EndSuccess,
  selectFinalInsurerFailure,
  selectFinalInsurerSuccess,
} from '../reducers/bidding';

const BIDDING_URI = '/api/getbidding';
const CHOOSEFINALINSURER_URI = '/api/choosefinalinsurer';

export function bidding() {
  return dispatch => {
    const options = {
      method: 'get',
      url: BIDDING_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getBiddingSuccess(res.data));
      })
      .catch(err => {
        dispatch(getBiddingFailure(err.response.data));
      });
  };
}

export function endTimeout(end) {
  return dispatch => {
    dispatch(EndSuccess({ end }));
  };
}

export function chooseFinalInsurer(passwordToConfirm, insurerName, step) {
  return dispatch => {
    const options = {
      method: 'post',
      url: CHOOSEFINALINSURER_URI,
      data: {
        passwordToConfirm,
        insurerName,
        step,
      },
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(selectFinalInsurerSuccess(res.data));
      })
      .catch(err => {
        dispatch(selectFinalInsurerFailure(err.response.data));
      });
  };
}
