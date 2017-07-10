import { APIRequest } from '.'
import {
  EndSuccess,
  EndFailure
} from '../reducers/bidding'

export function endTimeout(end){
    return dispatch => {
        dispatch(EndSuccess({end}))
    }
}
