/**
 * Default State
 */
const defaultUser = {
  user: null,
  personalEmail: '',
  phone: '',
  message: '',
  error: false,
};

/**
 * Action Constansts
 */
const UPDATE_PERSONALDETAIL_SUCCESS = 'user/UPDATE_PERSONALDETAIL_SUCCESS';
const UPDATE_PERSONALDETAIL_FAILURE = 'user/UPDATE_PERSONALDETAIL_FAILURE';

/**
 * Actions
 */
export function updatePersonalDetailSuccess(data) {
  return { type: UPDATE_PERSONALDETAIL_SUCCESS, data };
}

export function updatePersonalDetailFailure(data) {
  return { type: UPDATE_PERSONALDETAIL_FAILURE, data };
}

export function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case UPDATE_PERSONALDETAIL_SUCCESS:
      return Object.assign({}, state, {
        personalEmail: action.data.personalEmail,
        phone: action.data.phone,
        error: false,
      });
    case UPDATE_PERSONALDETAIL_FAILURE:
      return Object.assign({}, state, {
        message: action.data.error,
        error: true,
      });
    default:
      return state;
  }
}
