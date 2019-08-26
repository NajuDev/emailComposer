import React from 'react';

import AttachmentThumbnailComponent from './../../molecules/attachment-thumbnail/attachment-thumbnail.container';

import './attachments-area.styles.scss';

export const AttachmentsAreaComponent = (
    {
        attachmentList,
    }
) => (
    <aside
        className="attachments-area"
    >
        <h3
            className="attachments-area__title"
        >Attached files</h3>
        <div
            className="attachments-area__thumbnails"
        >
            {
                attachmentList.map(
                    ({
                        id,
                        name,
                        fileContents,
                        type
                    }) => (
                        <AttachmentThumbnailComponent
                            key={ id }
                            id={ id }
                            name={ name }
                            thumb={ fileContents }
                            mimeType={ type }
                        />
                    )
                )
            }
        </div>
    </aside>
)