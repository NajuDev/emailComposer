export const SET_TO_FIELD = 'SET_TO_FIELD';
export const setToFieldAction = (email) => (
    {
        type: SET_TO_FIELD,
        email
    }
);
export const SET_CC_FIELD = 'SET_CC_FIELD';
export const setCCFieldAction = (email) => (
    {
        type: SET_CC_FIELD,
        email
    }
);
export const SET_BCC_FIELD = 'SET_BCC_FIELD';
export const setBCCFieldAction = (email) => (
    {
        type: SET_BCC_FIELD,
        email
    }
);
