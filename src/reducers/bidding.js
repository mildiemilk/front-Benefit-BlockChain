const defaultEnd = { end: null }

const END_REQUEST_SUCCESS = 'END_REQUEST_SUCCESS'
const END_REQUEST_FAILURE = 'END_REQUEST_FAILURE'

export function EndSuccess(data) {
  return { type: END_REQUEST_SUCCESS, data }
}

export function EndFailure(data) {
  return { type: END_REQUEST_FAILURE, data }
}

export function endTimeout(state = defaultEnd, action) {
  switch (action.type) {
    case END_REQUEST_SUCCESS:
      return action.data.end
    case END_REQUEST_FAILURE:
      return Object.assign({}, state, {})
    default:
      return state
  }
}