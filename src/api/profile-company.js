import { APIRequest } from '.'
import {
  createProfileSuccess,
  createProfileFailure,
  getCompanyNameSuccess,
} from '../reducers/profile'

const PROFILE_URI = '/admin/registerCompany'
const COMPANYNAME_URI = '/admin/getCompanyName'

export function createProfile(profile) {
  return dispatch => {
    const options = {
      method: 'post',
      url: PROFILE_URI,
      data: profile,
    }

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('profile', res.data.profile)
        dispatch(createProfileSuccess(res.data))
        window.location.href = '/confirm_identity'
      })
      .catch(err => {
        dispatch(createProfileFailure(err.response.data))
      })
  }
}

export function getCompanyName() {
  return dispatch => {
    const options = {
      method: 'get',
      url: COMPANYNAME_URI,
    }

    APIRequest(options, true)
      .then(res => {
        localStorage.setItem('companyname', res.data.companyName)
        dispatch(getCompanyNameSuccess(res.data.companyName))
      })
      .catch(() => {})
  }
}

export default {
  createProfile,
}
