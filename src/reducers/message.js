import * as types from '../contains/ActionType';
import * as Message from '../contains/Message';
var initialState = Message.MSG_WELCOME
const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return [...state];
    }
}

export default message