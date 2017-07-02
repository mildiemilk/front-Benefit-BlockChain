const defaultchooseInsurer = {
  message: null,
  error: false,
}

const CHOOSEINSURER_REQUEST_SUCCESS = 'CHOOSEINSURER_REQUEST_SUCCESS'
const CHOOSEINSURER_REQUEST_FAILURE = 'CHOOSEINSURER_REQUEST_FAILURE'

export function chooseInsurerSuccess(data) {
  return { type: CHOOSEINSURER_REQUEST_SUCCESS, data }
}

export function chooseInsurerFailure(data) {
  return { type: CHOOSEINSURER_REQUEST_FAILURE, data }
}

export default function postBoxReducer(state = defaultchooseInsurer, action) {
  switch (action.type) {
    case SELECTBROKER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        message: action.data.message,
        error: false,
      })
    case SELECTBROKER_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      })
    default:
      return state
  }
}
