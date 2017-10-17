import FileSaver from 'file-saver';
import { APIRequest } from '.';
import {
  createProfileSuccess,
  createProfileFailure,
  setLogoSuccess,
  getFileEmployeeSuccess,
  getFileEmployeeFailure,
  claimDataSuccess,
  claimDataFailure,
  getClaimDataSuccess,
  getClaimDataFailure,
  employeeDetailSuccess,
  employeeDetailFailure,
  setCompleteStepSuccess,
  setCompleteStepFailure,
  getCompleteStepSuccess,
  getCompleteStepFailure,
  getGroupBenefitSuccess,
  getGroupBenefitFailure,
  setGroupBenefitSuccess,
  setGroupBenefitFailure,
  getSummaryEmployeeSuccess,
  getSummaryEmployeeFailure,
  getSummaryGroupSuccess,
  getSummaryGroupFailure,
  getClaimListSuccess,
  getClaimListFailure,
  getSummaryInsurancePlanSuccess,
  getSummaryInsuranceFailure,
  getSummaryTotalEmployeeSuccess,
  getSummaryTotalEmployeeFailure,
} from '../reducers/profile';

const PROFILE_URI = '/api/company/register-company';
const LOGO_URI = '/api/company/set-logo';
const FILEEMPLOYEE_URI = '/api/company/upload-employee';
const GET_FILEEMPLOYEE_URI = '/api/company/get-file-employee';
const GETTEMPLATE_URI = '/api/company/get-template';
const CLAIMDATA_URI = '/api/company/upload-claimdata';
const GETEMPLOYEEDETAIL_URI = '/api/company/get-employee';
const GETCLAIMDATA_URI = '/api/company/get-claim-data';
const SETCOMPLETESTEP_URI = '/api/company/set-complete-step';
const GETCOMPLETESTEP_URI = '/api/company/get-complete-step';
const GET_GROUPBENEFIT_URI = '/api/company/get-group-benefit';
const SET_GROUPBENEFIT_URI = '/api/company/set-group-benefit';
const GET_SUMMARYGROUP_URI = '/api/company/summary-group';
const GET_SUMMARYEMPLOYEE_URI = '/api/company/summary-employee-benefit';
const GET_CLAIMLIST_URI = 'api/company/get-claim-list';
const COMPANY_CLAIM_URI = 'api/company/claim';
const ADD_EMPLOYEE_URI = 'api/company/add-employee';
const EDIT_EMPLOYEE_URI = 'api/company/edit-employee';
const DELETE_EMPLOYEE_URI = 'api/company/delete-employee';
const MANAGE_EMPLOYEE_URI = 'api/company/manage-employee';
const GET_SUMMARY_INSURANCE_PLAN_URI = 'api/company/summary-insurance-plan';
const GET_SUMMARY_EMPLOYEE_URI = 'api/company/summary-employee';

export function createProfile(file, profile) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('detail', JSON.stringify(profile));
  return dispatch => {
    const options = {
      method: 'post',
      url: PROFILE_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('companyName', res.data.profile.companyName);
        if (file) {
          localStorage.setItem('logo', res.data.profile.logo.link);
        }
        dispatch(createProfileSuccess(res.data));
      })
      .catch(err => {
        dispatch(createProfileFailure(err));
      });
  };
}

export function setLogo(file) {
  const formData = new FormData();
  formData.append('file', file);
  return dispatch => {
    const options = {
      method: 'put',
      url: LOGO_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('logo', res.data.logo);
        dispatch(setLogoSuccess(res.data));
      });
      // .catch(err => {
      //   console.log(err);
      // });
  };
}

export function fileEmployee(file) {
  const formData = new FormData();
  formData.append('file', file);
  const options = {
    method: 'post',
    url: FILEEMPLOYEE_URI,
    data: formData,
  };

  return APIRequest(options, true);
}
export function getClaimData() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETCLAIMDATA_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getClaimDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(getClaimDataFailure(err.response.data));
      });
  };
}
export function claimData(files) {
  const formData = new FormData();
  files.map((file, index) => (
    formData.append('file', files[index])
  ));
  return dispatch => {
    const options = {
      method: 'put',
      url: CLAIMDATA_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(claimDataSuccess(res.data));
      })
      .catch(err => {
        dispatch(claimDataFailure(err.response.data));
      });
  };
}

export function getFileEmployee() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_FILEEMPLOYEE_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getFileEmployeeSuccess(res.data));
      })
      .catch(err => {
        dispatch(getFileEmployeeFailure(err.response.data));
      });
  };
}
export function employeeDetail() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETEMPLOYEEDETAIL_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(employeeDetailSuccess(res.data));
      })
      .catch(err => {
        if (err.response.data.statuscode === 401) {
          window.location.href = '/logout';
        }
        dispatch(employeeDetailFailure(err.response.data));
      });
  };
}

export function setCompleteStep(passwordToConfirm, step) {
  return dispatch => {
    const options = {
      method: 'put',
      url: SETCOMPLETESTEP_URI,
      data: {
        passwordToConfirm,
        step,
      },
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(setCompleteStepSuccess(res.data));
      })
      .catch(err => {
        dispatch(setCompleteStepFailure(err.response.data));
      });
  };
}

export function getCompleteStep() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETCOMPLETESTEP_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getCompleteStepSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCompleteStepFailure(err.response.data));
      });
  };
}

export function getTemplate() {
  return () => {
    const options = {
      method: 'get',
      url: GETTEMPLATE_URI,
      responseType: 'blob',
    };
    APIRequest(options, true)
      .then(res => {
        FileSaver.saveAs(res.data, 'EmployeedataTemplate.xlsx');
      })
      .catch(() => {
      });
  };
}

export function getGroupBenefit() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_GROUPBENEFIT_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getGroupBenefitSuccess(res.data));
      })
      .catch(err => {
        dispatch(getGroupBenefitFailure(err));
      });
  };
}

export function getSummaryEmployee() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_SUMMARYEMPLOYEE_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getSummaryEmployeeSuccess(res.data));
      })
      .catch(err => {
        dispatch(getSummaryEmployeeFailure(err));
      });
  };
}

export function getSummaryGroup() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_SUMMARYGROUP_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getSummaryGroupSuccess(res.data));
      })
      .catch(err => {
        dispatch(getSummaryGroupFailure(err));
      });
  };
}

export function setGroupBenefit(groupNumber, detail) {
  return dispatch => {
    const options = {
      method: 'put',
      url: `${SET_GROUPBENEFIT_URI}/${groupNumber}`,
      data: {
        type: detail.type,
        benefitPlan: detail.benefitPlan,
        defaultPlan: detail.defaultPlan,
      },
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(setGroupBenefitSuccess(res.data));
      })
      .catch(err => {
        dispatch(setGroupBenefitFailure(err.response.data));
      });
  };
}
export function summaryInsurancePlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_SUMMARY_INSURANCE_PLAN_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getSummaryInsurancePlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getSummaryInsuranceFailure(err));
      });
  };
}
export function getClaimList() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_CLAIMLIST_URI,
    };
    APIRequest(options, true)
      .then(res => {
        dispatch(getClaimListSuccess(res.data));
      })
      .catch(err => {
        dispatch(getClaimListFailure(err.response.data));
      });
  };
}
export function companyClaim(status, claimId, reason) {
  const options = {
    method: 'put',
    url: `${COMPANY_CLAIM_URI}/${status}/${claimId}`,
    data: {
      reason,
    },
  };
  return APIRequest(options, true);
}
export default {
  createProfile,
};

export function addEmployee(profile, file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('detail', JSON.stringify(profile));
  const options = {
    method: 'post',
    url: ADD_EMPLOYEE_URI,
    data: formData,
  };
  return APIRequest(options, true);
}
export function editEmployee(profile, file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('detail', JSON.stringify(profile));
  const options = {
    method: 'put',
    url: EDIT_EMPLOYEE_URI,
    data: formData,
  };
  return APIRequest(options, true);
}
export function deleteEmployee(employeeId) {
  const options = {
    method: 'delete',
    url: DELETE_EMPLOYEE_URI,
    data: { employeeId },
  };
  return APIRequest(options, true);
}

export function manageEmployee(detail, status) {
  const options = {
    method: 'post',
    url: `${MANAGE_EMPLOYEE_URI}/${status}`,
    data: detail,
  };
  return APIRequest(options, true);
}
export function getSummaryTotalEmployee() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_SUMMARY_EMPLOYEE_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getSummaryTotalEmployeeSuccess(res.data));
      })
      .catch(err => {
        dispatch(getSummaryTotalEmployeeFailure(err));
      });
  };
}
