import { APIRequest } from '.';
import {
  createPlanSuccess,
  createPlanFailure,
  editPlanSuccess,
  editPlanFailure,
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
  return dispatch => {
    const options = {
      method: 'post',
      url: CREATE_PLAN_URI,
      data: profilePlan,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(createPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(createPlanFailure(err.response.data));
      });
  };
}

export function editPlan(editData, planId, editType) {
  return dispatch => {
    const options = {
      method: 'put',
      url: `/${EDIT_PLAN_URI}/${planId}/${editType}`,
      data: editData,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(editPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(editPlanFailure(err.response.data));
      });
  };
}

export function deletePlan(planId) {
  return () => {
    const options = {
      method: 'delete',
      url: `${DELETE_PLAN_URI}/${planId}`,
    };

    APIRequest(options, true)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
}

export function copyPlan(planId) {
  return () => {
    const options = {
      method: 'post',
      url: `${COPY_PLAN_URI}/${planId}`,
    };

    APIRequest(options, true)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
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
        dispatch(getAllPlanFailure(err.response.data));
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
