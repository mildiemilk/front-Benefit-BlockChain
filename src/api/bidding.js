import { APIRequest } from '.';
import {
  getBiddingSuccess,
  getBiddingFailure,
  EndSuccess,
  selectFinalInsurerFailure,
  selectFinalInsurerSuccess,
  getBiddingDetailSuccess,
  getBiddingDetailFailure,
} from '../reducers/bidding';

const BIDDING_URI = '/api/company/get-bidding';
const CHOOSEFINALINSURER_URI = '/api/company/choose-final-insurer';
const GETDETAIL_URI = '/api/company/bidding-detail';

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

export function biddingDetailForCompany(companyId) {
  return dispatch => {
    const options = {
      method: 'get',
      url: `${GETDETAIL_URI}/${companyId}`,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getBiddingDetailSuccess(res.data));
      })
      .catch(err => {
        dispatch(getBiddingDetailFailure(err.response.data));
      });
  };
}

export function endTimeout(end) {
  return dispatch => {
    dispatch(EndSuccess({ end }));
  };
}

export function chooseFinalInsurer(passwordToConfirm, insurerCompany, step) {
  return dispatch => {
    const options = {
      method: 'put',
      url: CHOOSEFINALINSURER_URI,
      data: {
        passwordToConfirm,
        insurerCompany,
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
