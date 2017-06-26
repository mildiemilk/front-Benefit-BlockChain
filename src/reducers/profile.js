const defaultProfile = {
    nameInput: '',
    address:'',
    HR:'',
    tel:'',
    typeOfB:'',
    numberOfEmployees:'',
    broker:'',
    insurer:'',
}

const profile = (state = defaultProfile, action) => {
  switch (action.type) {
    case 'PROFILE_COMPANY':
      return Object.assign({}, state, { action })
    default:
      return state
  }
}

export default profile
