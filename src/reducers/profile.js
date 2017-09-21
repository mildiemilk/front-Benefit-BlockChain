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
  employeeDetail: [],
  completeStep: [],
  groupBenefit: [],
  summaryEmployee: [],
  summaryGroup: [],
  claimList: [],
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
const GET_FILEEMPLOYEE_REQUEST_SUCCESS = 'GET_FILEEMPLOYEE_REQUEST_SUCCESS';
const GET_FILEEMPLOYEE_REQUEST_FAILURE = 'GET_FILEEMPLOYEE_REQUEST_FAILURE';
const CLAIMDATA_REQUEST_SUCCESS = 'CLAIMDATA_REQUEST_SUCCESS';
const CLAIMDATA_REQUEST_FAILURE = 'CLAIMDATA_REQUEST_FAILURE';
const GETCLAIMDATA_REQUEST_SUCCESS = 'GETCLAIMDATA_REQUEST_SUCCESS';
const GETCLAIMDATA_REQUEST_FAILURE = 'GETCLAIMDATA_REQUEST_FAILURE';
const EMPLOYEEDETAIL_REQUEST_SUCCESS = 'EMPLOYEE_REQUEST_SUCCESS';
const EMPLOYEEDETAIL_REQUEST_FAILURE = 'EMPLOYEE_REQUEST_FAILURE';
const SETCOMPLETESTEP_REQUEST_SUCCESS = 'SETCOMPLETESTEP_REQUEST_SUCCESS';
const SETCOMPLETESTEP_REQUEST_FAILURE = 'SETCOMPLETESTEP_REQUEST_FAILURE';
const GETCOMPLETESTEP_REQUEST_SUCCESS = 'GETCOMPLETESTEP_REQUEST_SUCCESS';
const GETCOMPLETESTEP_REQUEST_FAILURE = 'GETCOMPLETESTEP_REQUEST_FAILURE';
const GET_GROUPBENEFIT_REQUEST_SUCCESS = 'GET_GROUPBENEFIT_REQUEST_SUCCESS';
const GET_GROUPBENEFIT_REQUEST_FAILURE = 'GET_GROUPBENEFIT_REQUEST_FAILURE';
const SET_GROUPBENEFIT_REQUEST_SUCCESS = 'SET_GROUPBENEFIT_REQUEST_SUCCESS';
const SET_GROUPBENEFIT_REQUEST_FAILURE = 'SET_GROUPBENEFIT_REQUEST_FAILURE';
const SELECT_FINAL_INSURER_SUCCESS = 'SELECT_FINAL_INSURER_SUCCESS';
const GET_SUMMARYEMPLOYEE_REQUEST_SUCCESS = 'GET_SUMMARYEMPLOYEE_REQUEST_SUCCESS';
const GET_SUMMARYEMPLOYEE_REQUEST_FAILURE = 'GET_SUMMARYEMPLOYEE_REQUEST_FAILURE';
const GET_SUMMARYGROUP_REQUEST_SUCCESS = 'GET_SUMMARYGROUP_REQUEST_SUCCESS';
const GET_SUMMARYGROUP_REQUEST_FAILURE = 'GET_SUMMARYGROUP_REQUEST_FAILURE';
const GET_CLAIMLIST_REQUEST_SUCCESS = 'GET_CLAIMLIST_REQUEST_SUCCESS';
const GET_CLAIMLIST_REQUEST_FAILURE = 'GET_CLAIMLIST_REQUEST_FAILURE';

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
export function getFileEmployeeSuccess(data) {
  return { type: GET_FILEEMPLOYEE_REQUEST_SUCCESS, data };
}
export function getFileEmployeeFailure(data) {
  return { type: GET_FILEEMPLOYEE_REQUEST_FAILURE, data };
}
export function claimDataSuccess(data) {
  return { type: CLAIMDATA_REQUEST_SUCCESS, data };
}
export function claimDataFailure(data) {
  return { type: CLAIMDATA_REQUEST_FAILURE, data };
}
export function getClaimDataSuccess(data) {
  return { type: GETCLAIMDATA_REQUEST_SUCCESS, data };
}
export function getClaimDataFailure(data) {
  return { type: GETCLAIMDATA_REQUEST_FAILURE, data };
}
export function employeeDetailSuccess(data) {
  return { type: EMPLOYEEDETAIL_REQUEST_SUCCESS, data };
}
export function employeeDetailFailure(data) {
  return { type: EMPLOYEEDETAIL_REQUEST_FAILURE, data };
}
export function setCompleteStepSuccess(data) {
  return { type: SETCOMPLETESTEP_REQUEST_SUCCESS, data };
}
export function setCompleteStepFailure(data) {
  return { type: SETCOMPLETESTEP_REQUEST_FAILURE, data };
}
export function getCompleteStepSuccess(data) {
  return { type: GETCOMPLETESTEP_REQUEST_SUCCESS, data };
}
export function getCompleteStepFailure(data) {
  return { type: GETCOMPLETESTEP_REQUEST_FAILURE, data };
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
export function getSummaryEmployeeSuccess(data) {
  return { type: GET_SUMMARYEMPLOYEE_REQUEST_SUCCESS, data };
}
export function getSummaryEmployeeFailure(data) {
  return { type: GET_SUMMARYEMPLOYEE_REQUEST_FAILURE, data };
}
export function getSummaryGroupSuccess(data) {
  return { type: GET_SUMMARYGROUP_REQUEST_SUCCESS, data };
}
export function getSummaryGroupFailure(data) {
  return { type: GET_SUMMARYGROUP_REQUEST_FAILURE, data };
}
export function getClaimListSuccess(data) {
  return { type: GET_CLAIMLIST_REQUEST_SUCCESS, data };
}
export function getClaimListFailure(data) {
  return { type: GET_CLAIMLIST_REQUEST_FAILURE, data };
}
/**
 * Reducer
 */

export default function profile(state = defaultProfile, action) {
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
    case GETCLAIMDATA_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        claimData: action.data,
      });
    case GETCLAIMDATA_REQUEST_FAILURE:
    case GET_FILEEMPLOYEE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        fileEmployee: action.data,
      });
    case GET_FILEEMPLOYEE_REQUEST_FAILURE:
    case GET_GROUPBENEFIT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        groupBenefit: action.data,
      });
    case GET_GROUPBENEFIT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case EMPLOYEEDETAIL_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        employeeDetail: action.data,
      });
    case EMPLOYEEDETAIL_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case SETCOMPLETESTEP_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        completeStep: action.data,
      });
    case SETCOMPLETESTEP_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case GETCOMPLETESTEP_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        completeStep: action.data,
      });
    case GETCOMPLETESTEP_REQUEST_FAILURE:
    case SET_GROUPBENEFIT_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        groupBenefit: action.data,
      });
    case SET_GROUPBENEFIT_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    case SELECT_FINAL_INSURER_SUCCESS:
      return Object.assign({}, state, {
        completeStep: action.data.completeStep,
      });
    case GET_SUMMARYEMPLOYEE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        summaryEmployee: action.data,
      });
    case GET_SUMMARYEMPLOYEE_REQUEST_FAILURE:
      return state;
    case GET_SUMMARYGROUP_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        summaryGroup: action.data,
      });
    case GET_SUMMARYGROUP_REQUEST_FAILURE:
      return state;
    case GET_CLAIMLIST_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        claimList: action.data,
      });
    case GET_CLAIMLIST_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
