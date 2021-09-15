import userAction from './user.action.type'
const INITIAL_STAT = {
    currentUser: null
}

const userReducer = (state = INITIAL_STAT, action) => {
    switch (action.type) {
        case userAction.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;