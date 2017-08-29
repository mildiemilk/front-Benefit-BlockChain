/**
 * Default State
 */
const defaultProfile = {
  companyName: localStorage.getItem('companyName'),
  location: '',
  HR: '',
  tel: '',
  typeOfBusiness: '',
  numberOfEmployees: '',
  companyBroker: '',
  companyInsurer: '',
  logo: localStorage.getItem('logo'),
  fileEmployee: '',
  claimData: [],
  groupBenefit: [],
  message: null,
  error: false,
};

/**
 * Action Constansts
 */
const PROFILECOMPANY_REQUEST_SUCCESS = 'PROFILECOMPANY_REQUEST_SUCCESS';
const PROFILECOMPANY_REQUEST_FAILURE = 'PROFILECOMPANY_REQUEST_FAILURE';
const SETLOGO_REQUEST_SUCCESS = 'SETLOGO_REQUEST_SUCCESS';
const AUTHENTICATE_REQUEST_SUCCESS = 'auth/AUTHENTICATE_REQUEST_SUCCESS';
const FILEEMPLOYEE_REQUEST_SUCCESS = 'FILEEMPLOYEE_REQUEST_SUCCESS';
const FILEEMPLOYEE_REQUEST_FAILURE = 'FILEEMPLOYEE_REQUEST_FAILURE';
const CLAIMDATA_REQUEST_SUCCESS = 'CLAIMDATA_REQUEST_SUCCESS';
const CLAIMDATA_REQUEST_FAILURE = 'CLAIMDATA_REQUEST_FAILURE';
const GET_GROUPBENEFIT_REQUEST_SUCCESS = 'GET_GROUPBENEFIT_REQUEST_SUCCESS';
const GET_GROUPBENEFIT_REQUEST_FAILURE = 'GET_GROUPBENEFIT_REQUEST_FAILURE';
const SET_GROUPBENEFIT_REQUEST_SUCCESS = 'SET_GROUPBENEFIT_REQUEST_SUCCESS';
const SET_GROUPBENEFIT_REQUEST_FAILURE = 'SET_GROUPBENEFIT_REQUEST_FAILURE';

/**
 * Actions
 */
export function createProfileSuccess(data) {
  return { type: PROFILECOMPANY_REQUEST_SUCCESS, data };
}

export function createProfileFailure(data) {
  return { type: PROFILECOMPANY_REQUEST_FAILURE, data };
}

export function setLogoSuccess(data) {
  return { type: SETLOGO_REQUEST_SUCCESS, data };
}
export function fileEmployeeSuccess(data) {
  return { type: FILEEMPLOYEE_REQUEST_SUCCESS, data };
}
export function fileEmployeeFailure(data) {
  return { type: FILEEMPLOYEE_REQUEST_FAILURE, data };
}
export function claimDataSuccess(data) {
  return { type: CLAIMDATA_REQUEST_SUCCESS, data };
}
export function claimDataFailure(data) {
  return { type: CLAIMDATA_REQUEST_FAILURE, data };
}
export function getGroupBenefitSuccess(data) {
  return { type: GET_GROUPBENEFIT_REQUEST_SUCCESS, data };
}
export function getGroupBenefitFailure(data) {
  return { type: GET_GROUPBENEFIT_REQUEST_FAILURE, data };
}
export function setGroupBenefitSuccess(data) {
  return { type: SET_GROUPBENEFIT_REQUEST_SUCCESS, data };
}
export function setGroupBenefitFailure(data) {
  return { type: SET_GROUPBENEFIT_REQUEST_FAILURE, data };
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
        tel: action.data.profile.tel,
        typeOfBusiness: action.data.profile.typeOfBusiness,
        numberOfEmployees: action.data.profile.numberOfEmployees,
        companyBroker: action.data.profile.companyBroker,
        companyInsurer: action.data.profile.companyInsurer,
        message: action.data.message,
        error: false,
      });
    case PROFILECOMPANY_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case SETLOGO_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        logo: action.data.logo,
      });
    case AUTHENTICATE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        companyName: action.data.companyName,
        logo: action.data.logo,
      });
    case FILEEMPLOYEE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        fileEmployee: action.data.fileEmployee,
      });
    case FILEEMPLOYEE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case CLAIMDATA_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        claimData: action.data.claimData,
      });
    case CLAIMDATA_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case GET_GROUPBENEFIT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        groupBenefit: action.data,
      });
    case GET_GROUPBENEFIT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case SET_GROUPBENEFIT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        groupBenefit: action.data,
      });
    case SET_GROUPBENEFIT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    default:
      return state;
  }
}
