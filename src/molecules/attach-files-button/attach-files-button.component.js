import React from 'react';

import { FileInputButtonComponent } from './../../atoms/file-input/file-input-button.component';

import './attach-files-button.styles.scss';

export const AttachFilesButton = (
    {
        handleAttachFile,
    }
) => (
    <label
        className="attach-files-button"
    >
        <i
            className="attach-files-button__icon material-icons"
        >attach_file</i>
        <FileInputButtonComponent
            classes="attach-files-button__file-input"
            handleFileUpload={ handleAttachFile }
        />
    </label>
)