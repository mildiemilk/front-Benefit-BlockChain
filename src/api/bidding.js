import { APIRequest } from '.'
import {
  getBiddingSuccess,
  getBiddingFailure,
  EndSuccess,
  selectFinalInsurerFailure,
  selectFinalInsurerSuccess,
} from '../reducers/bidding'
import { withRouter } from 'react-router'

const BIDDING_URI = '/api/getbidding'
const CHOOSEFINALINSURER_URI = '/api/choosefinalinsurer'

export function bidding() {
  return dispatch => {
    const options = {
      method: 'get',
      url: BIDDING_URI,
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(getBiddingSuccess(res.data))
      })
      .catch(err => {
        dispatch(getBiddingFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export function endTimeout(end) {
  return dispatch => {
    dispatch(EndSuccess({ end }))
  }
}

export function chooseFinalInsurer(passwordToConfirm, insurerName) {
  console.log('aaaaaa', insurerName)
  return dispatch => {
    const options = {
      method: 'post',
      url: CHOOSEFINALINSURER_URI,
      data: {
        passwordToConfirm,
        insurerName,
      },
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
        dispatch(selectFinalInsurerSuccess(res.data))
        window.location.href = '/congrats'
      })
      .catch(err => {
        dispatch(selectFinalInsurerFailure(err.response.data))
        console.log(err.response)
      })
  }
}
