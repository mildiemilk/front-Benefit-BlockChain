import { APIRequest } from '.'
import { choosePlanSuccess } from '../reducers/benefit-plan'

const CHOOSE_PLAN_URI = '/api/benefit-plan'
const EDITCHOOSE_PLAN_URI = '/api/edit-benefit-plan'

export function choosePlan(plan) {
  return dispatch => {
    const options = {
      method: 'post',
      url: CHOOSE_PLAN_URI,
      data: { plan },
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(createPlanSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export function editChoosePlan(plan) {
  return dispatch => {
    const options = {
      method: 'post',
      url: EDITCHOOSE_PLAN_URI,
      data: { plan },
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(createPlanSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}
