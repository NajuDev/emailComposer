import React from 'react';

export const FileInputButtonComponent = (
    {
        classes,
        handleFileUpload
    }
) => (
    <input
        className={'file-input' + !!classes ? ` ${classes}` : '' }
        type="file"
        multiple
        onChange={ handleFileUpload }
    />
);