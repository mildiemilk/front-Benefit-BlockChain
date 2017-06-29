import { APIRequest } from '.'
import { createProfileSuccess } from '../reducers/profile'

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
      })
      .catch(err => console.log(err.response))
  }
}

export default {
  createProfile,
}
