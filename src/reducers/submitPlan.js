/**
 * Default State
 */
const defaultPlan = []

/**
 * Action Constansts
 */
const CREATEPLAN_REQUEST_SUCCESS = 'CREATEPLAN_REQUEST_SUCCESS'
const CREATEPLAN_REQUEST_FAILURE = 'CREATEPLAN_REQUEST_FAILURE'
const EDITPLAN_REQUEST_SUCCESS = 'EDITPLAN_REQUEST_SUCCESS'
const EDITPLAN_REQUEST_FAILURE = 'EDITPLAN_REQUEST_FAILURE'
const GETALLPLAN_REQUEST_SUCCESS = 'GETALLPLAN_REQUEST_SUCCESS'
const GETALLPLAN_REQUEST_FAILURE = 'GETALLPLAN_REQUEST_FAILURE'

/**
 * Actions
 */
export function createPlanSuccess(data) {
  return { type: CREATEPLAN_REQUEST_SUCCESS, data }
}

export function createPlanFailure(data) {
  return { type: CREATEPLAN_REQUEST_FAILURE, data }
}

export function editPlanSuccess(data) {
  return { type: EDITPLAN_REQUEST_SUCCESS, data }
}

export function editPlanFailure(data) {
  return { type: EDITPLAN_REQUEST_FAILURE, data }
}

export function getAllPlanSuccess(data) {
  return { type: GETALLPLAN_REQUEST_SUCCESS, data }
}

export function getAllPlanFailure(data) {
  return { type: GETALLPLAN_REQUEST_FAILURE, data }
}
/**
 * Reducer
 */
export default function planReducer(state = defaultPlan, action) {
  switch (action.type) {
    case CREATEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {})
    case CREATEPLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    case EDITPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {})
    case EDITPLAN_REQUEST_FAILURE:
      console.log(action.data.message)
      return Object.assign({}, state, {})
    case GETALLPLAN_REQUEST_SUCCESS:
      return action.data
    case GETALLPLAN_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}
