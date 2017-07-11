import { APIRequest } from '.'
import { getBiddingSuccess, getBiddingFailure, EndSuccess, EndFailure } from '../reducers/bidding'
import { withRouter } from 'react-router'
import Postbox from '../components/PostBox'

const BIDDING_URI = '/api/getbidding'

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

export function endTimeout(end){
    return dispatch => {
        dispatch(EndSuccess({end}))
    }
}
