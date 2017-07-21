/**
 * Default State
 */
const defaultPlan = {
  choosePlan: [],
}

/**
 * Action Constansts
 */
const CHOOSEPLAN_REQUEST_SUCCESS = 'CHOOSEPLAN_REQUEST_SUCCESS'
const CHOOSEPLAN_REQUEST_FAILURE = 'CHOOSEPLAN_REQUEST_FAILURE'
const EDITCHOOSEPLAN_REQUEST_SUCCESS = 'EDITCHOOSEPLAN_REQUEST_SUCCESS'
const EDITCHOOSEPLAN_REQUEST_FAILURE = 'EDITCHOOSEPLAN_REQUEST_FAILURE'

/**
 * Actions
 */
export function choosePlanSuccess(data) {
  return { type: CHOOSEPLAN_REQUEST_SUCCESS, data }
}

export function choosePlanFailure(data) {
  return { type: CHOOSEPLAN_REQUEST_FAILURE, data }
}

export function EditChoosePlanSuccess(data) {
  return { type: EDITCHOOSEPLAN_REQUEST_SUCCESS, data }
}

export function EditChoosePlanFailure(data) {
  return { type: EDITCHOOSEPLAN_REQUEST_FAILURE, data }
}

/**
 * Reducer
 */
export function choosePlan(state = defaultPlan, action) {
  switch (action.type) {
    case CHOOSEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { choosePlan: action.data })
    case CHOOSEPLAN_REQUEST_FAILURE:
      return state
    case EDITCHOOSEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, { choosePlan: action.data })
    case EDITCHOOSEPLAN_REQUEST_FAILURE:
      return state
    default:
      return state
  }
}
