import { APIRequest } from '.'
import {
  chooseInsurerSuccess,
  chooseInsurerFailure,
} from '../reducers/ chooseInsurerFailure'

const CHOOSEINSURER_URI = '/api/chooseInsurer'
export function chooseInsurer(
  Insurer1,
  Insurer2,
  Insurer3,
  Insurer4,
  Insurer5,
) {
  return dispatch => {
    const options = {
      method: 'post',
      url: CHOOSEINSURER_URI,
      data: {
        Insurer1,
        Insurer2,
        Insurer3,
        Insurer4,
        Insurer5,
      },
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
        dispatch(chooseInsurerSuccess(res.data))
      })
      .catch(err => {
        dispatch(chooseInsurerFailure(err.response.data))
        console.log(err.response)
      })
  }
}
