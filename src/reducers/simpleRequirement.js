const defaultfillsimpleReducer = {
  numberOfEmployee: '',
  typeOfInsurance: '',
  IPD: '',
  OPD: '',
  dental: '',
  life: '',
  other: '',
  otherDes: '',
  day: '',
  month: '',
  year: '',
  message: null,
  error: false,
}

const FILLSIMPLERQ_REQUEST_SUCCESS = 'FILLSIMPLERQ_REQUEST_SUCCESS'
const FILLSIMPLERQ_REQUEST_FAILURE = 'FILLSIMPLERQ_REQUEST_FAILURE'

export function fillsimpleRqSuccess(data) {
  return { type: FILLSIMPLERQ_REQUEST_SUCCESS, data }
}

export function fillsimpleRqFailure(data) {
  return { type: FILLSIMPLERQ_REQUEST_FAILURE, data }
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
        day: action.data.day,
        month: action.data.month,
        year: action.data.year,
        message: action.data.message,
      })
    case FILLSIMPLERQ_REQUEST_FAILURE:
      console.log('bbbbbbbbbbbb')
      console.log(action.data.message)
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}
