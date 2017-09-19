/**
 * Default State
 */

const claimData = [];


/**
 * Action Constansts
 */

const GETCLAIM_STATUS_SUCCESS = 'GETCLAIM_STATUS_SUCCESS';
const GETCLAIM_STATUS_FAILURE = 'GETCLAIM_STATUS_FAILURE';


/**
 * Actions
 */

export function getClaimStatusSuccess(data) {
  return { type: GETCLAIM_STATUS_SUCCESS, data };
}

export function getClaimStatusFailure(data) {
  return { type: GETCLAIM_STATUS_FAILURE, data };
}

/**
 * Reducer
 */

export function getClaimStatusReducer(state = claimData, action) {
  switch (action.type) {
    case GETCLAIM_STATUS_SUCCESS:
      return action.data;
    case GETCLAIM_STATUS_FAILURE:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
