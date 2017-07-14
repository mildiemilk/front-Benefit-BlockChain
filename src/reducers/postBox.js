const defaultpostBoxReducer = {
  selectBroker: false,
  message: null,
  error: false,
}

const SELECTBROKER_REQUEST_SUCCESS = 'SELECTBROKER_REQUEST_SUCCESS'
const SELECTBROKER_REQUEST_FAILURE = 'SELECTBROKER_REQUEST_FAILURE'

export function selectBrokerSuccess(data) {
  return { type: SELECTBROKER_REQUEST_SUCCESS, data }
}

export function selectBrokerFailure(data) {
  return { type: SELECTBROKER_REQUEST_FAILURE, data }
}

export default function postBoxReducer(state = defaultpostBoxReducer, action) {
  switch (action.type) {
    case SELECTBROKER_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        selectBroker: true,
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
