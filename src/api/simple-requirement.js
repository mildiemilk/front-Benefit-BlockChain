import { APIRequest } from '.'
import {
  fillsimpleRqSuccess,
  fillsimpleRqFailure,
  getsimpleRqSuccess,
  getsimpleRqFailure,
} from '../reducers/simple-requirement'

const SIMPLERQ_URI = '/admin/simpleRequirement'
const GETSIMPLERQ_URI = '/admin/getSimpleRequirement'

export function fillSimpleRQ(
  numberOfEmployee,
  typeOfInsurance,
  IPD,
  OPD,
  dental,
  life,
  other,
  otherDes,
  date,
) {
  return dispatch => {
    const options = {
      method: 'post',
      url: SIMPLERQ_URI,
      data: {
        numberOfEmployee,
        typeOfInsurance,
        IPD,
        OPD,
        dental,
        life,
        other,
        otherDes,
        date,
      },
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(fillsimpleRqSuccess(res.data))
        window.location.href = '/postbox'
      })
      .catch(err => {
        dispatch(fillsimpleRqFailure(err.response.data))
      })
  }
}

export function getSimpleRQ() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETSIMPLERQ_URI,
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(getsimpleRqSuccess(res.data))
      })
      .catch(err => {
        dispatch(getsimpleRqFailure(err.response.data))
      })
  }
}
