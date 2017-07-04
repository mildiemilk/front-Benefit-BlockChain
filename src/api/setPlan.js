import { APIRequest } from '.'
import {
  createPlanSuccess,
  editPlanSuccess,
  getAllPlanSuccess,
} from '../reducers/submitPlan'

const CREATE_PLAN_URI = '/api/createPlan'
const EDIT_PLAN_URI = 'api/editPlan'
const GET_ALL_PLAN_URI = '/api/getAllPlan'
const COPY_PLAN_URI = '/api/copyPlan'
const DELETE_PLAN_URI = '/api/deletePlan'

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
      method: 'delete',
      url: DELETE_PLAN_URI + '/' + planId,
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
      method: 'post',
      url: COPY_PLAN_URI + '/' + planId,
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
export function getAllPlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_ALL_PLAN_URI,
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(getAllPlanSuccess(res.data))
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}

export default {
  createPlan,
}
