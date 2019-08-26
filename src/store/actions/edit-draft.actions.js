export const SET_SUBJECT = 'SET_SUBJECT';
export const setSubjectAction = (subject) => (
    {
        type: SET_SUBJECT,
        subject
    }
);

export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessageAction = (message) => (
    {
        type: SET_MESSAGE,
        message
    }
);