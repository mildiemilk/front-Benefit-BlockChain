/**
 * Default State
 */
const defaultPlan = {
  planId: null,
  planName: null,
  company: null,
  employeeOfPlan: null,
  updateBy: null,
  ipdType: null,
  ipdLumsumPerYear: null,
  ipdLumsumPerTime: null,
  ipdLumsumTimeNotExceedPerYear: null,
  rbLumsumRoomPerNight: null,
  rbLumsumNigthNotExceedPerYear: null,
  rbLumsumPayNotExceedPerNight: null,
  rbLumsumPayNotExceedPerYear: null,
  rbSchedulePatient: null,
  rbScheduleIntensiveCarePatient: null,
  rbScheduleDoctor: null,
  rbScheduleSurgery: null,
  rbScheduleService: null,
  rbScheduleSmallSurgery: null,
  rbScheduleAdviser: null,
  rbScheduleAmbulance: null,
  rbScheduleAccident: null,
  rbScheduleTreatment: null,
  rbScheduleTransplant: null,
  ipdCoPlay: false,
  ipdCoPlayQuota: null,
  ipdCoPlayDeductable: null,
  ipdCoPlayMixPercentage: null,
  ipdCoPlayMixNotExceed: null,
  ipdCoPlayMixYear: null,
  opdPerYear: null,
  opdPerTime: null,
  opdTimeNotExceedPerYear: null,
  opdCoPlay: false,
  opdCoPlayQuota: null,
  opdCoPlayDeductable: null,
  opdCoPlayMixPercentage: null,
  opdCoPlayMixNotExceed: null,
  opdCoPlayMixYear: null,
  dentalPerYear: null,
  lifePerYear: null,
  lifeTimeOfSalary: null,
  lifeNotExceed: null,
  message: null,
  error: false,
}

/**
 * Action Constansts
 */
const CREATEPLAN_REQUEST_SUCCESS = 'CREATEPLAN_REQUEST_SUCCESS'
const CREATEPLAN_REQUEST_FAILURE = 'CREATEPLAN_REQUEST_FAILURE'
const EDITPLAN_REQUEST_SUCCESS = 'EDITPLAN_REQUEST_SUCCESS'
const EDITPLAN_REQUEST_FAILURE = 'EDITPLAN_REQUEST_FAILURE'

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
/**
 * Reducer
 */
export default function planReducer(state = defaultPlan, action) {
  switch (action.type) {
    case CREATEPLAN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        planId: action.data.planId,
        planName: action.data.planName,
        company: action.data.company,
        employeeOfPlan: action.data.employeeOfPlan,
        updateBy: action.data.updateBy,
        message: action.data.message,
        error: false,
      })
    case CREATEPLAN_REQUEST_FAILURE:
      console.log(action.data.message)
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    case EDITPLAN_REQUEST_SUCCESS:
      console.log(action.data)
      return Object.assign({}, state, {
        error: false,
      })
    case EDITPLAN_REQUEST_FAILURE:
      console.log(action.data.message)
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}
