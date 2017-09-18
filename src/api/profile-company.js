import FileSaver from 'file-saver';
import { APIRequest } from '.';
import {
  createProfileSuccess,
  createProfileFailure,
  setLogoSuccess,
  fileEmployeeSuccess,
  fileEmployeeFailure,
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
} from '../reducers/profile';

const PROFILE_URI = '/api/company/register-company';
const LOGO_URI = '/api/company/set-logo';
const FILEEMPLOYEE_URI = '/api/company/upload-employee';
const GETTEMPLATE_URI = '/api/company/get-template';
const CLAIMDATA_URI = '/api/company/upload-claimdata';
const GETEMPLOYEEDETAIL_URI = '/api/company/get-employee';
const GETCLAIMDATA_URI = '/api/company/get-claim-data';
const SETCOMPLETESTEP_URI = '/api/company/set-complete-step';
const GETCOMPLETESTEP_URI = '/api/company/get-complete-step';
const GET_GROUPBENEFIT_URI = '/api/company/get-group-benefit';
const SET_GROUPBENEFIT_URI = '/api/company/set-group-benefit';
const GET_SUMMARYEMPLOYEE_URI = '/api/company/summary-employee-benefit';

export function createProfile(profile) {
  return dispatch => {
    const options = {
      method: 'post',
      url: PROFILE_URI,
      data: profile,
    };

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('companyName', res.data.profile.companyName);
        dispatch(createProfileSuccess(res.data));
      })
      .catch(err => {
        dispatch(createProfileFailure(err.response.data));
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
  return dispatch => {
    const options = {
      method: 'put',
      url: FILEEMPLOYEE_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(fileEmployeeSuccess(res.data));
      })
      .catch(err => {
        dispatch(fileEmployeeFailure(err.response.data));
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
      .catch(err => {
        console.log(err);
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

export default {
  createProfile,
};
