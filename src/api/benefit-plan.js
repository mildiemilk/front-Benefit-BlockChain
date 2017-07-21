import { APIRequest } from '.'
import {
  choosePlanSuccess,
  choosePlanFailure,
  editChoosePlanSuccess,
  editChoosePlanFailure,
  editOptionSuccess,
  editOptionFailure,
} from '../reducers/benefit-plan'

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
        dispatch(choosePlanSuccess(res.data))
      })
      .catch(err => {
        dispatch(choosePlanSuccess(err.response.data))
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
        dispatch(editChoosePlanSuccess(res.data))
      })
      .catch(err => {
        dispatch(editChoosePlanFailure(err.response.data))
        console.log(err.response)
      })
  }
}

export function planOption(
  isHealth,
  isExpense,
  HealthList,
  ExpenseList,
  selectedOptionHealth1,
  selectedOptionHealth2,
  selectedOptionHealth3,
  selectedOptionExpense1,
  selectedOptionExpense2,
  selectedOptionExpense3,
) {
  return dispatch => {
    const options = {
      method: 'post',
      url: EDITCHOOSE_PLAN_URI,
      data: {
        isHealth,
        isExpense,
        HealthList,
        ExpenseList,
        selectedOptionHealth1,
        selectedOptionHealth2,
        selectedOptionHealth3,
        selectedOptionExpense1,
        selectedOptionExpense2,
        selectedOptionExpense3,
      },
    }

    APIRequest(options, true)
      .then(res => {
        dispatch(editOptionSuccess(res.data))
        window.location.href = '/settingbenefit'
      })
      .catch(err => {
        dispatch(editOptionFailure(err.response.data))
        console.log(err.response)
      })
  }
}
