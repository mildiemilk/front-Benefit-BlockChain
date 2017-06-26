import { actionTypes as types, urls } from '../constants'
import { post } from '../helpers'

export const companyFill = com => dispatch => {
  dispatch({ type: 'PROFILE_COMPANY', com })
}