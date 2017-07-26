/**
 * Default State
 */
const defaultPlan = {
  choosePlan: [],
  health: {},
  isHealth: false,
  expense: {},
  isExpense: false,
}

const defaultBenefitPlan = {
  plan: [],
}

/**
 * Action Constansts
 */

const CHOOSEPLAN_REQUEST_SUCCESS = 'CHOOSEPLAN_REQUEST_SUCCESS'
const CHOOSEPLAN_REQUEST_FAILURE = 'CHOOSEPLAN_REQUEST_FAILURE'
const EDITCHOOSEPLAN_REQUEST_SUCCESS = 'EDITCHOOSEPLAN_REQUEST_SUCCESS'
const EDITCHOOSEPLAN_REQUEST_FAILURE = 'EDITCHOOSEPLAN_REQUEST_FAILURE'
const EDITOPTION_REQUEST_SUSCESS = 'EDITOPTION_REQUEST_SUCCESS'
const EDITOPTION_REQUEST_FAILURE = 'EDITOPTION_REQUEST_FAILURE'
const GETOPTIONPLAN_REQUEST_SUSCESS = 'GETOPTIONPLAN_REQUEST_SUSCESS'
const GETOPTIONPLAN_REQUEST_FAILURE = 'GETOPTIONPLAN_REQUEST_FAILURE'
const GETBENEFITPLAN_REQUEST_SUSCESS = 'GETBENEFITPLAN_REQUEST_SUSCESS'
const GETBENEFITPLAN_REQUEST_FAILURE = 'GETBENEFITPLAN_REQUEST_FAILURE'
const SETBENEFITPLAN_REQUEST_SUSCESS = 'SETBENEFITPLAN_REQUEST_SUSCESS'
const SETBENEFITPLAN_REQUEST_FAILURE = 'SETBENEFITPLAN_REQUEST_FAILURE'

/**
 * Actions
 */
export function choosePlanSuccess(data) {
  return { type: CHOOSEPLAN_REQUEST_SUCCESS, data }
}

export function choosePlanFailure(data) {
  return { type: CHOOSEPLAN_REQUEST_FAILURE, data }
}

export function editChoosePlanSuccess(data) {
  return { type: EDITCHOOSEPLAN_REQUEST_SUCCESS, data }
}

export function editChoosePlanFailure(data) {
  return { type: EDITCHOOSEPLAN_REQUEST_FAILURE, data }
}

export function editOptionSuccess(data) {
  return { type: EDITOPTION_REQUEST_SUSCESS, data }
}

export function editOptionFailure(data) {
  return { type: EDITOPTION_REQUEST_FAILURE, data }
}

export function getOptionPlanSuccess(data) {
  return { type: GETOPTIONPLAN_REQUEST_SUSCESS, data }
}

export function getOptionPlanFailure(data) {
  return { type: GETOPTIONPLAN_REQUEST_FAILURE, data }
}

export function getBenefitPlanSuccess(data) {
  return { type: GETBENEFITPLAN_REQUEST_SUSCESS, data }
}

export function getBenefitPlanFailure(data) {
  return { type: GETBENEFITPLAN_REQUEST_FAILURE, data }
}

export function setBenefitPlanSuccess(data) {
  return { type: SETBENEFITPLAN_REQUEST_SUSCESS, data }
}

export function setBenefitPlanFailure(data) {
  return { type: SETBENEFITPLAN_REQUEST_FAILURE, data }
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
    case EDITOPTION_REQUEST_SUSCESS:
      return Object.assign({}, state, {
        health: action.data.health,
        isHealth: action.data.isHealth,
        expense: action.data.expense,
        isExpense: action.data.isExpense,
      })
    case EDITOPTION_REQUEST_FAILURE:
      return state
    case GETOPTIONPLAN_REQUEST_SUSCESS:
      return Object.assign({}, state, {
        choosePlan: action.data.plan,
        health: action.data.health,
        isHealth: action.data.isHealth,
        expense: action.data.expense,
        isExpense: action.data.isExpense,
      })
    case GETOPTIONPLAN_REQUEST_FAILURE:
      return state
    default:
      return state
  }
}

export function benefitPlan(state = defaultBenefitPlan, action) {
  switch (action.type) {
    case GETBENEFITPLAN_REQUEST_SUSCESS:
      return Object.assign({}, state, { plan: action.data })
    case GETBENEFITPLAN_REQUEST_FAILURE:
      return state
    case SETBENEFITPLAN_REQUEST_SUSCESS:
      return Object.assign({}, state, { plan: action.data })
    case SETBENEFITPLAN_REQUEST_FAILURE:
      return state
    default:
      return state
  }
}
