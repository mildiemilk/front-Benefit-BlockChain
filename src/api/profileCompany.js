import { APIRequest } from '.'
import { createProfileSuccess, createProfileFailure } from '../reducers/profile'

const PROFILE_URI = '/admin/registerCompany'

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
        window.location.href = '/dashboard'
      })
      .catch(err => {
        dispatch(createProfileFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export default {
  createProfile,
}
