import { APIRequest } from '.'
import {
  fillsimpleRqSuccess,
  fillsimpleRqFailure,
} from '../reducers/simple-requirement'
import { withRouter } from 'react-router'
import Postbox from '../components/PostBox'

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
  day,
  month,
  year,
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
        day,
        month,
        year,
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
