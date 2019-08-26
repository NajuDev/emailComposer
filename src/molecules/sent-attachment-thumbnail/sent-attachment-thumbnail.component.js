import React from 'react';

import './sent-attachment-thumbnail.styles.scss';

export const SentAttachmentThumbnailComponent = (
    {
        name,
        thumb,
        mimeType,
    }
) => (
    <article
        className="sent-attachment-thumbnail"
    >
        {
            mimeType.startsWith('image/')
                ? <img
                    className="sent-attachment-thumbnail__image-file"
                    src={ thumb }
                    alt={ name }
                />
                : <div
                    className="sent-attachment-thumbnail__file"
                >
                    <i
                        className="sent-attachment-thumbnail__thumb-icon material-icons"
                    >insert_drive_file</i>
                    { name }
                </div>
        }
    </article>
);