import React from 'react';

import { AttachFilesButton } from './../../molecules/attach-files-button/attach-files-button.component';

import { createAttachments } from './../../utils/create-attachments';

import './draft-buttons.styles.scss';

export const DraftButtonsComponent = (
    {
        sendable,
        sendMail
    }
) => (
    <React.Fragment>
        <AttachFilesButton
            handleAttachFile={ (event) => createAttachments(event.target.files, event.target) }
        />
        <button
            className="send-mail-button"
            onClick={ sendMail }
            disabled={ !sendable }
        >
            <i
                className="send-mail-button__icon material-icons"
            >arrow_forward</i>Send</button>
    </React.Fragment>
);
