import React from 'react';

import './attachment-thumbnail.styles.scss';

export const AttachmentThumbnailComponent = (
    {
        id,
        name,
        thumb,
        mimeType,
        deleteAttachment
    }
) => (
    <article
        className="attachment-thumbnail"
    >
        {
            mimeType.startsWith('image/')
                ? <img
                    className="attachment-thumbnail__image-file"
                    src={ thumb }
                    alt={ name }
                />
                : <div
                    className="attachment-thumbnail__file"
                >
                    <i
                        className="attachment-thumbnail__thumb-icon material-icons"
                    >insert_drive_file</i>
                    { name }
                </div>
        }
        <button
            className="attachment-thumbnail__delete-button"
            onClick={ () => deleteAttachment(id) }
        >
            <i
                className="material-icons"
            >delete</i>
            Delete
        </button>
    </article>
);