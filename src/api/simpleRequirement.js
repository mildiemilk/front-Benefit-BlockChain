import { APIRequest } from '.'
import {
  fillsimpleRqSuccess,
  fillsimpleRqFailure,
} from '../reducers/simpleRequirement'

const SIMPLERQ_URI = '/admin/simpleRequirement'
export function fillSimpleRQ(
  numberOfEmployee,
  typeOfInsurance,
  IPD,
  OPD,
  dental,
  life,
  other,
  otherDes,
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
      },
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
        dispatch(fillsimpleRqSuccess(res.data))
        window.location.href = '/postbox'
      })
      .catch(err => {
        dispatch(fillsimpleRqFailure(err.response.data))
        console.log(err.response)
      })
  }
}
