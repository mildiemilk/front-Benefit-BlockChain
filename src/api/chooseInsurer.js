import { APIRequest } from '.'
import {
  chooseInsurerSuccess,
  chooseInsurerFailure,
  setTimeOutsFailure,
  setTimeOutSuccess,
} from '../reducers/chooseInsurer'

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

export function setTimeOut(timeout){
    console.log(timeout.date)
   
   return dispatch => { dispatch(setTimeOutSuccess(timeout.date)) }
}

