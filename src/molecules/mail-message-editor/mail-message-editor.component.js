import React from 'react';

import './mail-message-editor.styles.scss';

export const MailMessageEditorComponent = (
    {
        message,
        placeholder = "Message",
        whenChanged
    }
) => (
    <div
        className="mail-message-editor"
    >
        <textarea
            className="mail-message-editor__textarea"
            placeholder={ placeholder }
            onChange={ whenChanged }
            value={ message }
        ></textarea>
    </div>
);
