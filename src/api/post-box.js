import { APIRequest } from '.'
import { selectBrokerSuccess, selectBrokerFailure } from '../reducers/post-box'

const SIMPLERQ_URI = '/api/postbox'
export function postBox(passwordToConfirm) {
  return dispatch => {
    const options = {
      method: 'post',
      url: SIMPLERQ_URI,
      data: {
        passwordToConfirm,
      },
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(selectBrokerSuccess(res.data))
      })
      .catch(err => {
        dispatch(selectBrokerFailure(err.response.data))
      })
  }
}
