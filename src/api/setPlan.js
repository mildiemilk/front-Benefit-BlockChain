import { APIRequest } from '.'
import { createPlanSuccess } from '../reducers/submitPlan'

const CREATE_PLAN_URI = '/api/createPlan'
const EDIT_PLAN_URI = 'api/editPlan'

export function createPlan(profilePlan) {
  return dispatch => {
    const options = {
      method: 'post',
      url: CREATE_PLAN_URI,
      data: profilePlan,
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

export function editPlan(editData, planId, editType) {
  return dispatch => {
    const options = {
      method: 'put',
      url: EDIT_PLAN_URI + '/' + planId + '/' + editType,
      data: editData,
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(editPlanSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export function deletePlan(planId) {
  return dispatch => {
    const options = {
      method: 'DELETE',
      url: 'deletePlan/' + planId,
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export function copyPlan(planId) {
  return dispatch => {
    const options = {
      method: 'POST',
      url: 'copyPlan/' + planId,
    }

    APIRequest(options, true)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export default {
  createPlan,
}
