import {
    ADD_ATTACHMENT,
    DELETE_ATTACHMENT,
    SET_TO_FIELD,
    SET_CC_FIELD,
    SET_BCC_FIELD,
    SET_SUBJECT,
    SET_MESSAGE
} from './../actions/index';

import {
    checkEmailValidity
} from './../../utils/check-email-validity';

const initialState = {
    to: [],
    toValid: true,
    cc: [],
    ccValid: true,
    bcc: [],
    bccValid: true,
    subject: '',
    message: '',
    attachments: [],
    sendAble: false
};

export const draftReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_ATTACHMENT:
            return {
                ...state,
                attachments: [
                    ...state.attachments,
                    action.attachmentData
                ]
            };
        case DELETE_ATTACHMENT:
            return {
                ...state,
                attachments: state.attachments.filter(
                    (attachment) => attachment.id !== action.attachmentId
                )
            };
        case SET_TO_FIELD:
            return {
                ...state,
                to: action.email,
                toValid: checkEmailValidity(action.email)
            }
        case SET_CC_FIELD:
            return {
                ...state,
                cc: action.email,
                ccValid: action.email.length === 1 && !!action.email[0] ? checkEmailValidity(action.email) : true
            }
        case SET_BCC_FIELD:
            return {
                ...state,
                bcc: action.email,
                bccValid: action.email.length === 1 && !!action.email[0] ? checkEmailValidity(action.email) : true
            };
        case SET_SUBJECT:
            return {
                ...state,
                subject: action.subject
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    };
};
