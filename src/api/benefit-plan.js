import { APIRequest } from '.';
import {
  getInsurancePlanSuccess,
  getInsurancePlanFailure,
  choosePlanSuccess,
  choosePlanFailure,
  setTemplatePlanSuccess,
  setTemplatePlanFailure,
  getTemplatePlanSuccess,
  getTemplatePlanFailure,
  getBenefitPlanSuccess,
  getBenefitPlanFailure,
  setBenefitPlanSuccess,
  setBenefitPlanFailure,
  setTimeoutSuccess,
  setTimeoutFailure,
} from '../reducers/benefit-plan';

const GETINSURANCE_PLAN_URI = '/api/company/get-insurance-plan';
const CHOOSE_PLAN_URI = '/api/company/set-template-plan';
const SETTEMPLATEBENEFIT_PLAN_URI = '/api/company/set-template-benefit';
const GETTEMPLATE_PLAN_URI = '/api/company/get-template-plan';
const GETBENEFIT_PLAN_URI = '/api/company/get-benefit-plan';
const SETBENEFIT_PLAN_URI = '/api/set-benefit-plan';
const SETTIMEOUT_PLAN_URI = '/api/set-benefit-timeout';

export function choosePlan(plan) {
  return dispatch => {
    const options = {
      method: 'put',
      url: CHOOSE_PLAN_URI,
      data: { plan },
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(choosePlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(choosePlanFailure(err));
      });
  };
}
export function getInsurancePlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETINSURANCE_PLAN_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getInsurancePlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getInsurancePlanFailure(err));
      });
  };
}
// export function editChoosePlan(plan) {
//   return dispatch => {
//     const options = {
//       method: 'post',
//       url: EDITCHOOSE_PLAN_URI,
//       data: { plan },
//     };

//     APIRequest(options, true)
//       .then(res => {
//         dispatch(editChoosePlanSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(editChoosePlanFailure(err.response.data));
//       });
//   };
// }

export function setTemplatePlan(data) {
  return dispatch => {
    const options = {
      method: 'put',
      url: SETTEMPLATEBENEFIT_PLAN_URI,
      data,
    };

    APIRequest(options, true)
      .then(res => {
        console.log('data settemplate');
        dispatch(setTemplatePlanSuccess(res.data));
      })
      .catch(err => {
        console.log('template', err);
        dispatch(setTemplatePlanFailure(err.response.data));
      });
  };
}

export function getTemplatePlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETTEMPLATE_PLAN_URI,
    };

    APIRequest(options, true)
      .then(res => {
        console.log('api gettem: ', res);
        dispatch(getTemplatePlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getTemplatePlanFailure(err));
      });
  };
}

export function getBenefitPlan() {
  return dispatch => {
    const options = {
      method: 'get',
      url: GETBENEFIT_PLAN_URI,
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(getBenefitPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(getBenefitPlanFailure(err));
      });
  };
}

export function setBenefitPlan(benefitPlans) {
  return dispatch => {
    const options = {
      method: 'post',
      url: SETBENEFIT_PLAN_URI,
      data: { benefitPlans },
    };

    APIRequest(options, true)
      .then(res => {
        dispatch(setBenefitPlanSuccess(res.data));
      })
      .catch(err => {
        dispatch(setBenefitPlanFailure(err.response.data));
      });
  };
}
export function setTimeout(timeout) {
  return dispatch => {
    const options = {
      method: 'post',
      url: SETTIMEOUT_PLAN_URI,
      data: { timeout },
    };
    APIRequest(options, true)
    .then(res => {
      dispatch(setTimeoutSuccess(res.data));
    })
    .catch(err => {
      dispatch(setTimeoutFailure(err.response.data));
    });
  };
}
