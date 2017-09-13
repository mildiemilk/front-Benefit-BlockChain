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
} from '../reducers/profile';

const PROFILE_URI = '/admin/registerCompany';
const LOGO_URI = '/admin/set-logo';
const FILEEMPLOYEE_URI = '/admin/upload-employee';
const GETTEMPLATE_URI = '/admin/get-template';
const CLAIMDATA_URI = '/admin/upload-claimdata';
const GETEMPLOYEEDETAIL_URI = '/admin/get-employee';
const GETCLAIMDATA_URI = '/admin/get-claim-data';
const SETCOMPLETESTEP_URI = '/admin/set-complete-step';
const GETCOMPLETESTEP_URI = '/admin/get-complete-step';
const GET_GROUPBENEFIT_URI = '/admin/get-group-benefit';
const SET_GROUPBENEFIT_URI = '/admin/set-group-benefit';

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
      })
      .catch(err => {
        console.log(err);
      });
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
        console.log(err);
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
        console.log(err);
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
        console.log('err', err.response.data.error);
        if (err.response.data.statuscode === 401) {
          console.log('token invalid');
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
        console.log('success');
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
        dispatch(getGroupBenefitFailure(err.response.data));
      });
  };
}

export function setGroupBenefit(groupNumber, detail) {
  return dispatch => {
    const options = {
      method: 'put',
      url: `${SET_GROUPBENEFIT_URI}/${groupNumber}`,
      data: { detail },
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
