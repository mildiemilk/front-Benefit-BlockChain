/**
 * Default State
 */
const biddingList = []

/**
 * Action Constansts
 */
const GETBIDDING_REQUEST_SUCCESS = 'GETBIDDING_REQUEST_SUCCESS'
const GETBIDDING_REQUEST_FAILURE = 'GETBIDDING_REQUEST_FAILURE'

/**
 * Actions
 */
export function getBiddingSuccess(data) {
  return { type: GETBIDDING_REQUEST_SUCCESS, data }
}

export function getBiddingFailure(data) {
  return { type: GETBIDDING_REQUEST_FAILURE, data }
}

/**
 * Reducer
 */
export default function biddingReducer(state = biddingList, action) {
  switch (action.type) {
    case GETBIDDING_REQUEST_SUCCESS:
      return action.data
    case GETBIDDING_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
