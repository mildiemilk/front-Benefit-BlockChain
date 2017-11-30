const defaultData = {
  dataLedger: [],
};

const GETDATA_REQUEST_SUCCESS = 'GETDATA_REQUEST_SUCCESS';
const GETDATA_REQUEST_FAILURE = 'GETDATA_REQUEST_FAILURE';

export function getDataSuccess(data) {
  return { type: GETDATA_REQUEST_SUCCESS, data };
}

export function getDataFailure(data) {
  return { type: GETDATA_REQUEST_FAILURE, data };
}

export function ledger(state = defaultData, action) {
  switch (action.type) {
    case GETDATA_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        dataLedger: action.data,
      });
    case GETDATA_REQUEST_FAILURE:
      return Object.assign({}, state, {
        message: action.data.message,
        error: true,
      });
    default:
      return state;
  }
}
