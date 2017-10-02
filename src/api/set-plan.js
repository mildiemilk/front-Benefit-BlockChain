import { APIRequest } from '.';
import {
  getAllPlanSuccess,
  getAllPlanFailure,
  menuPlanSuccess,
} from '../reducers/submit-plan';

const CREATE_PLAN_URI = '/api/company/create-plan';
const EDIT_PLAN_URI = 'api/company/edit-plan';
const GET_ALL_PLAN_URI = '/api/company/get-all-plan';
const COPY_PLAN_URI = '/api/company/copy-plan';
const DELETE_PLAN_URI = '/api/company/delete-plan';

export function createPlan(profilePlan) {
  const options = {
    method: 'post',
    url: CREATE_PLAN_URI,
    data: profilePlan,
  };
  return APIRequest(options, true);
}

export function editPlan(editData, planId, editType) {
  const options = {
    method: 'put',
    url: `/${EDIT_PLAN_URI}/${planId}/${editType}`,
    data: editData,
  };
  return APIRequest(options, true);
}

export function deletePlan(plans) {
  const options = {
    method: 'delete',
    url: DELETE_PLAN_URI,
    data: plans,
  };
  return APIRequest(options, true);
}

export function copyPlan(plans) {
  const options = {
    method: 'post',
    url: COPY_PLAN_URI,
    data: plans,
  };
  return APIRequest(options, true);
}

export function getAllPlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GET_ALL_PLAN_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getAllPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAllPlanFailure(err));
      });
  };
}

export function menuPlans(comparePlan) {
  return dispatch => {
    localStorage.setItem('comparePlan', JSON.stringify(comparePlan));
    dispatch(menuPlanSuccess(comparePlan));
  };
}

export default {
  createPlan,
};
