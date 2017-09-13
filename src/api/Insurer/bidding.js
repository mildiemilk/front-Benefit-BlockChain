import { APIRequest } from '../index';
import {
  getCompanyBiddingSuccess,
  getCompanyBiddingFailure,
  getCompanyBiddingListSuccess,
  getCompanyBiddingListFailure,
  getTimeoutSuccess,
  getTimeoutFailure,
  joinBidSuccess,
  joinBidFailure,
} from '../../reducers/Insurer/bidding';

const GETTIMEOUT_URI = '../api/getTimeout';
const BIDDING_LIS_URI = '/api/insurer/company-list';
const BIDDING_DETAIL_URI = '/api/insurer/bidding-detail';
const JOIN_BIDDING_URI = '/api/insurer/bidding';

export function getCompanyBidding(companyId) {
  console.log('api----', companyId);
  return dispatch => {
    const options = {
      method: 'get',
      // url: BIDDING_DETAIL_URI,
      url: `${BIDDING_DETAIL_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCompanyBiddingSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompanyBiddingFailure(err.response.data));
      });
  };
}

export function getCompanyBiddingList() {
  return dispatch => {
    const options = {
      method: 'get',
      url: BIDDING_LIS_URI,
    };
    APIRequest(options, true)
      .then(res => {
        console.log('getCompanyBiddingList');
        dispatch(getCompanyBiddingListSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompanyBiddingListFailure(err.response.data));
      });
  };
}

export function joinBidding(databiding) {
  return dispatch => {
    const options = {
      method: 'post',
      url: JOIN_BIDDING_URI,
      data: databiding,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(joinBidSuccess(res.data));
      })
      .catch(err => {
        dispatch(joinBidFailure(err.response.data));
      });
  };
}

export function getTimeout() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETTIMEOUT_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getTimeoutSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTimeoutFailure(err.response.data));
      });
  };
}
