import { APIRequest } from '.'
import { authenticateSuccess } from '../reducers/auth'

const SIMPLERQ_URI = 'admin/simpleRequirement'
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
        console.log(response)
      })
      .catch(err => console.log(err.response))
  }
}
