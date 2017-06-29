/**
 * Default State
 */
const defaultProfile = {
  companyName: '',
  location: '',
  HR: '',
  tel: '',
  typeOfBusiness: '',
  numberOfEmployees: '',
  companyBroker: '',
  companyInsurer: '',
}
/*
  companyName: localStorage.getItem('profile').companyName,
  location: localStorage.getItem('profile').location,
  HR: localStorage.getItem('profile').hr,
  tel: localStorage.getItem('profile').tel,
  typeOfBusiness: localStorage.getItem('profile').typeOfBusiness,
  numberOfEmployees: localStorage.getItem('profile').numberOfEmployees,
  companyBroker: localStorage.getItem('profile').companycompanyBroker,
  companyInsurer: localStorage.getItem('profile').companyInsurance,
*/

/**
 * Action Constansts
 */
const PROFILECOMPANY_REQUEST_SUCCESS = 'PROFILECOMPANY_REQUEST_SUCCESS'
const PROFILECOMPANY_REQUEST_FAILURE = 'PROFILECOMPANY_REQUEST_FAILURE'

/**
 * Actions
 */
export function createProfileSuccess(data) {
  return { type: PROFILECOMPANY_REQUEST_SUCCESS, data }
}

export function createProfileFailure(data) {
  return { type: PROFILECOMPANY_REQUEST_FAILURE, data }
}

/**
 * Reducer
 */

export default function profileReducer(state = defaultProfile, action) {
  switch (action.type) {
    case PROFILECOMPANY_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        companyName: action.data.companyName,
        location: action.data.location,
        // HR: action.data.HR,
        tel: action.data.tel,
        typeOfBusiness: action.data.typeOfBusiness,
        numberOfEmployees: action.data.numberOfEmployees,
        companyBroker: action.data.companyBroker,
        companyInsurer: action.data.companyInsurer,
      })
    default:
      return state
  }
}
