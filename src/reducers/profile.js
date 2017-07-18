/**
 * Default State
 */
const defaultProfile = {
  companyName: localStorage.getItem('companyname') || '',
  location: '',
  HR: '',
  tel: '',
  typeOfBusiness: '',
  numberOfEmployees: '',
  companyBroker: '',
  companyInsurer: '',
  message: null,
  error: false,
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
const GET_COM_NAME_REQUEST_SUCCESS = 'GET_COM_NAME_REQUEST_SUCCESS'
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

export function getCompanyNameSuccess(data) {
  return { type: GET_COM_NAME_REQUEST_SUCCESS, data }
}

/**
 * Reducer
 */

export default function profileReducer(state = defaultProfile, action) {
  switch (action.type) {
    case PROFILECOMPANY_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        companyName: action.data.profile.companyName,
        location: action.data.profile.location,
        // HR: action.data.HR,
        tel: action.data.profile.tel,
        typeOfBusiness: action.data.profile.typeOfBusiness,
        numberOfEmployees: action.data.profile.numberOfEmployees,
        companyBroker: action.data.profile.companyBroker,
        companyInsurer: action.data.profile.companyInsurer,
        message: action.data.message,
        error: false,
      })
    case GET_COM_NAME_REQUEST_SUCCESS:
      return Object.assign({}, state, { companyName: action.data })
    case PROFILECOMPANY_REQUEST_FAILURE:
      console.log(action.data.message)
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}
