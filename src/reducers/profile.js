const defaultProfile = {
  nameInput: '55555',
  address: '',
  HR: '',
  tel: '',
  typeOfB: '',
  numberOfEmployees: '',
  broker: '',
  insurer: '',
}

const profile = (state = defaultProfile, action) => {
  switch (action.type) {
    case 'PROFILE_COMPANY':
      return Object.assign({}, state, { 
        nameInput: action.com.nameInput,
        address: action.com.address,
        HR: action.com.HR,
        tel: action.com.tel,
        typeOfB: action.com.typeOfB,
        numberOfEmployees: action.com.numberOfEmployees,
        broker: action.com.broker,
        insurer: action.com.insurer,
       })
    default:
      return state
  }
}

export default profile
