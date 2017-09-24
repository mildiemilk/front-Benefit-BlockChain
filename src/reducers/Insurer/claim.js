/**
 * Default State
 */
const defaultClaim = {
  claim: [],
  company: {},
  count: {},
};

/**
 * Action Constansts
 */
const CLAIM_COMPANY_REQUEST_SUCCESS = 'CLAIM_COMPANY_REQUEST_SUCCESS';
const CLAIM_COMPANY_REQUEST_FAILURE = 'CLAIM_COMPANY_REQUEST_FAILURE';
const CLAIM_REQUEST_SUCCESS = 'CLAIM_REQUEST_SUCCESS';
const CLAIM_REQUEST_FAILURE = 'CLAIM_REQUEST_FAILURE';

/**
 * Actions
 */
export function getClaimSuccess(data) {
  return { type: CLAIM_REQUEST_SUCCESS, data };
}

export function getClaimFailure(data) {
  return { type: CLAIM_REQUEST_FAILURE, data };
}
export function getCompanyClaimSuccess(data) {
  return { type: CLAIM_COMPANY_REQUEST_SUCCESS, data };
}

export function getCompanyClaimFailure(data) {
  return { type: CLAIM_COMPANY_REQUEST_FAILURE, data };
}

export function claimReducer(state = defaultClaim, action) {
  switch (action.type) {
    case CLAIM_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        claim: action.data.claims,
        company: action.data.company,
        count: action.data.count });
    case CLAIM_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
export function claimListReducer(state = defaultClaim, action) {
  switch (action.type) {
    case CLAIM_COMPANY_REQUEST_SUCCESS:
      return Object.assign({}, state, { claim: action.data });
    case CLAIM_COMPANY_REQUEST_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
