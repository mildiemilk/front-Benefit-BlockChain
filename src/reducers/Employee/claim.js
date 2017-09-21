/**
 * Default State
 */
const defaultClaimData = {
  claimData: [],
};

const defaultLogClaim = {
  logClaim: [],
};

const defaultClaimOption = {
  claimUser: [],
  insuranceList: [],
  healthList: [],
  expenseList: [],
};

/**
 * Action Constansts
 */
const GETCLAIM_STATUS_SUCCESS = 'GETCLAIM_STATUS_SUCCESS';
const GETCLAIM_STATUS_FAILURE = 'GETCLAIM_STATUS_FAILURE';
const GET_CLAIM_HISTORY_SUCCESS = 'GET_CLAIM_HISTORY_SUCCESS';
const GET_CLAIM_HISTORY_FAILURE = 'GET_CLAIM_HISTORY_FAILURE';
const CLAIM_OPTION_REQUEST_SUCCESS = 'auth/CLAIM_OPTION_REQUEST_SUCCESS';
const CLAIM_OPTION_REQUEST_FAILURE = 'auth/CLAIM_OPTION_REQUEST_FAILURE';

/**
 * Actions
 */
export function getClaimStatusSuccess(data) {
  return { type: GETCLAIM_STATUS_SUCCESS, data };
}

export function getClaimStatusFailure(data) {
  return { type: GETCLAIM_STATUS_FAILURE, data };
}

export function getClaimHistorySuccess(data) {
  return { type: GET_CLAIM_HISTORY_SUCCESS, data };
}

export function getClaimHistoryFailure(data) {
  return { type: GET_CLAIM_HISTORY_FAILURE, data };
}

export function claimOptionSuccess(data) {
  return { type: CLAIM_OPTION_REQUEST_SUCCESS, data };
}

export function claimOptionFailure(data) {
  return { type: CLAIM_OPTION_REQUEST_FAILURE, data };
}

export function claimOptionReducer(state = defaultClaimOption, action) {
  switch (action.type) {
    case CLAIM_OPTION_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        claimUser: action.data.claimUser,
        healthList: action.data.healthList,
        expenseList: action.data.expenseList,
      });
    case CLAIM_OPTION_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}

export function getClaimHistoryReducer(state = defaultLogClaim, action) {
  switch (action.type) {
    case GET_CLAIM_HISTORY_SUCCESS:
      return Object.assign({}, state, {
        logClaim: action.data,
      });
    case GET_CLAIM_HISTORY_FAILURE:
      return state;
    default:
      return state;
  }
}

export function getClaimStatusReducer(state = defaultClaimData, action) {
  switch (action.type) {
    case GETCLAIM_STATUS_SUCCESS:
      return Object.assign({}, state, {
        claimData: action.data,
      });
    case GETCLAIM_STATUS_FAILURE:
      return state;
    default:
      return state;
  }
}
