import {
    SEND_MAIL,
} from './../actions/index';

const initialState = {
    editing: true,
    sentMail: undefined,
    sent: false,
};

export const appStateReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SEND_MAIL:
            return {
                ...state,
                editing: false,
                sent: true
            };
        default:
            return state;
    };
};
