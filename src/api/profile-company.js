import { APIRequest } from '.';
import {
  createProfileSuccess,
  createProfileFailure,
  setLogoSuccess,
  fileEmployeeSuccess,
  fileEmployeeFailure,
  claimDataSuccess,
  claimDataFailure,
} from '../reducers/profile';

const PROFILE_URI = '/admin/registerCompany';
const LOGO_URI = '/admin/set-logo';
const FILEEMPLOYEE_URI = '/admin/upload-employee';
const CLAIMDATA_URI = '/admin/upload-claimdata';

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
        console.log('thisfile', file);
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
  // files.map((file, index) => (
  //   formData.append('file', files[index])
  // ));
  formData.append('file', files[0]);
  formData.append('file', files[1]);
  console.log('formdata', formData);
  return dispatch => {
    const options = {
      method: 'put',
      url: CLAIMDATA_URI,
      data: formData,
    };

    APIRequest(options, true)
      .then(res => {
        console.log('ClaimData', files, res.data);
        dispatch(claimDataSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(claimDataFailure(err.response.data));
      });
  };
}

export default {
  createProfile,
};
