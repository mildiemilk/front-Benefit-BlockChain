import { APIRequest } from '../index';
import {
  getCompanyBiddingSuccess,
  getCompanyBiddingFailure,
  getCompanyBiddingListSuccess,
  getCompanyBiddingListFailure,
  // getTimeoutSuccess,
  // getTimeoutFailure,
  joinBidSuccess,
  joinBidFailure,
} from '../../reducers/Insurer/bidding';

// const GETTIMEOUT_URI = '../api/getTimeout';
const BIDDING_LIS_URI = '/api/insurer/company-list';
const BIDDING_DETAIL_URI = '/api/insurer/bidding-detail';
const JOIN_BIDDING_URI = '/api/insurer/bidding';
const DELETE_PLAN_URI = '/api/insurer/delete-plan';
const EXTEND_PLAN_URL = '/api/insurer/extended-plan';
const BIDDING_STATUS = '/api/insurer';


export function editPlanDetail(planId, plan) {
  console.log('Api=====', plan);
  return () => {
    const options = {
      method: 'post',
      url: `${EXTEND_PLAN_URL}/${planId}`,
      data: plan,
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
export function deletePlan(planId) {
  return () => {
    const options = {
      method: 'delete',
      url: `${DELETE_PLAN_URI}/${planId}`,
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
export function updateBiddingPrice(companyId, databiding) {
  console.log('Api=====', databiding);
  return () => {
    const options = {
      method: 'post',
      url: `${JOIN_BIDDING_URI}/${companyId}`,
      data: databiding,
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
export function updateStatus(status, companyId) {
  console.log('Api=====', companyId);
  return () => {
    const options = {
      method: 'put',
      url: `${BIDDING_STATUS}/${status}`,
      data: { companyId },
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
export function deleteInsurerPlan(planId) {
  return () => {
    const options = {
      method: 'delete',
      url: `${DELETE_PLAN_URI}/${planId}`,
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
export function getCompanyBidding(companyId) {
  console.log('api----', companyId);
  return dispatch => {
    const options = {
      method: 'get',
      url: `${BIDDING_DETAIL_URI}/${companyId}`,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCompanyBiddingSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompanyBiddingFailure(err));
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
