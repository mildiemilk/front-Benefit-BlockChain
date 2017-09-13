/**
 * Default State
 */
const biddingList = [];
const defaultEnd = { end: null };
const defaultJoinCompanies = {
  joinCompanies: false,
  message: null,
  error: false,
};
const defaultTimeOut = {
  timeout: null,
};


/**
 * Action Constansts
 */
const GETBIDDING_REQUEST_SUCCESS = 'GETBIDDING_REQUEST_SUCCESS';
const GETBIDDING_REQUEST_FAILURE = 'GETBIDDING_REQUEST_FAILURE';
const END_REQUEST_SUCCESS = 'END_REQUEST_SUCCESS';
const END_REQUEST_FAILURE = 'END_REQUEST_FAILURE';
const JOIN_BID_SUCCESS = 'JOIN_BID_SUCCESS';
const JOIN_BID_FAILURE = 'JOIN_BID_FAILURE';
const GETTIMEOUT_REQUEST_SUCCESS = 'GETTIMEOUT_REQUEST_SUCCESS';
const GETTIMEOUT_REQUEST_FAILURE = 'GETTIMEOUT_REQUEST_FAILURE';
const SETTIMEOUT_REQUEST_SUCCESS = 'SETTIMEOUT_REQUEST_SUCCESS';
const SETTIMEOUT_REQUEST_FAILURE = 'SETTIMEOUT_REQUEST_FAILURE';

/**
 * Actions
 */
export function getCompanyBiddingSuccess(data) {
  return { type: GETBIDDING_REQUEST_SUCCESS, data };
}

export function getCompanyBiddingFailure(data) {
  return { type: GETBIDDING_REQUEST_FAILURE, data };
}

export function joinBidSuccess(data) {
  return { type: JOIN_BID_SUCCESS, data };
}

export function joinBidFailure(data) {
  return { type: JOIN_BID_FAILURE, data };
}

export function EndSuccess(data) {
  return { type: END_REQUEST_SUCCESS, data };
}

export function EndFailure(data) {
  return { type: END_REQUEST_FAILURE, data };
}
export function getTimeoutSuccess(data) {
  return { type: GETTIMEOUT_REQUEST_SUCCESS, data };
}
export function getTimeoutFailure(data) {
  return { type: GETTIMEOUT_REQUEST_FAILURE, data };
}
/**
 * Reducer
 */
export function biddingReducer(state = biddingList, action) {
  switch (action.type) {
    case GETBIDDING_REQUEST_SUCCESS:
      return action.data;
    case GETBIDDING_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export function endTimeout(state = defaultEnd, action) {
  switch (action.type) {
    case END_REQUEST_SUCCESS:
      return action.data.end;
    case END_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}

export function joinCompanies(state = defaultJoinCompanies, action) {
  switch (action.type) {
    case JOIN_BID_SUCCESS:
      return Object.assign({}, state, {
        selectFinalInsurer: true,
        message: action.data.message,
        error: false,
      });
    case JOIN_BID_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    default:
      return state;
  }
}

export function setTimeOut(state = defaultTimeOut, action) {
  switch (action.type) {
    case SETTIMEOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        timeout: action.data,
      });
    case SETTIMEOUT_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    case GETTIMEOUT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        timeout: action.data,
      });
    case GETBIDDING_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
