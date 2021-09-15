import userAction from './user.action.type'
const setCurrentUser = user => ({
    type: userAction.SET_CURRENT_USER,
    payload: user
});

export default setCurrentUser;