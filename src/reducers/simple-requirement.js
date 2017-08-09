const defaultfillsimpleReducer = {
  numberOfEmployee: '',
  typeOfInsurance: '',
  IPD: '',
  OPD: '',
  dental: '',
  life: '',
  other: '',
  otherDes: '',
  date: '',
  message: null,
  error: false,
}

const FILLSIMPLERQ_REQUEST_SUCCESS = 'FILLSIMPLERQ_REQUEST_SUCCESS'
const FILLSIMPLERQ_REQUEST_FAILURE = 'FILLSIMPLERQ_REQUEST_FAILURE'
const GETSIMPLERQ_REQUEST_SUCCESS = 'GETSIMPLERQ_REQUEST_SUCCESS'
const GETSIMPLERQ_REQUEST_FAILURE = 'GETSIMPLERQ_REQUEST_FAILURE'

export function fillsimpleRqSuccess(data) {
  return { type: FILLSIMPLERQ_REQUEST_SUCCESS, data }
}

export function fillsimpleRqFailure(data) {
  return { type: FILLSIMPLERQ_REQUEST_FAILURE, data }
}

export function getsimpleRqSuccess(data) {
  return { type: GETSIMPLERQ_REQUEST_SUCCESS, data }
}

export function getsimpleRqFailure(data) {
  return { type: GETSIMPLERQ_REQUEST_FAILURE, data }
}

export default function fillsimpleReducer(
  state = defaultfillsimpleReducer,
  action,
) {
  switch (action.type) {
    case FILLSIMPLERQ_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        numberOfEmployee: action.data.numberOfEmployee,
        typeOfInsurance: action.data.typeOfInsurance,
        IPD: action.data.IPD,
        OPD: action.data.OPD,
        dental: action.data.dental,
        life: action.data.life,
        other: action.data.other,
        otherDes: action.data.otherDes,
        date: action.data.date,
        message: action.data.message,
        error: false,
      })
    case FILLSIMPLERQ_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    case GETSIMPLERQ_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        numberOfEmployee: action.data.numberOfEmployee,
        typeOfInsurance: action.data.typeOfInsurance,
        IPD: action.data.IPD,
        OPD: action.data.OPD,
        dental: action.data.dental,
        life: action.data.life,
        other: action.data.other,
        otherDes: action.data.otherDes,
        date: action.data.date,
        message: action.data.message,
        error: false,
      })
    case GETSIMPLERQ_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}
