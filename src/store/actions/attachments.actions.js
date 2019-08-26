export const ADD_ATTACHMENT = 'ADD_ATTACHMENT';
export const addAttachmentAction = (attachmentData) => (
    {
        attachmentData,
        type: ADD_ATTACHMENT,
    }
);

export const DELETE_ATTACHMENT = 'DELETE_ATTACHMENT';
export const deleteAttachmentAction = (attachmentId) => (
    {
        attachmentId,
        type: DELETE_ATTACHMENT
    }
);
