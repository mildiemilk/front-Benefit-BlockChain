/**
 * Default State
 */
const biddingList = []
const defaultEnd = { end: null }

/**
 * Action Constansts
 */
const GETBIDDING_REQUEST_SUCCESS = 'GETBIDDING_REQUEST_SUCCESS'
const GETBIDDING_REQUEST_FAILURE = 'GETBIDDING_REQUEST_FAILURE'
const END_REQUEST_SUCCESS = 'END_REQUEST_SUCCESS'
const END_REQUEST_FAILURE = 'END_REQUEST_FAILURE'

/**
 * Actions
 */
export function getBiddingSuccess(data) {
  return { type: GETBIDDING_REQUEST_SUCCESS, data }
}

export function getBiddingFailure(data) {
  return { type: GETBIDDING_REQUEST_FAILURE, data }
}

export function EndSuccess(data) {
  return { type: END_REQUEST_SUCCESS, data }
}

export function EndFailure(data) {
  return { type: END_REQUEST_FAILURE, data }
}
/**
 * Reducer
 */
export function biddingReducer(state = biddingList, action) {
  switch (action.type) {
    case GETBIDDING_REQUEST_SUCCESS:
      return action.data
    case GETBIDDING_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}

export function endTimeout(state = defaultEnd, action) {
  switch (action.type) {
    case END_REQUEST_SUCCESS:
      return action.data.end
    case END_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
