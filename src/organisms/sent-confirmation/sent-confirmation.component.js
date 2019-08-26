import React from 'react';

import { ConfirmationComponent } from './../../molecules/confirmation/confirmation.component';
import { SentAttachmentThumbnailComponent } from './../../molecules/sent-attachment-thumbnail/sent-attachment-thumbnail.component';

import './sent-confirmation.styles.scss';

export const SentConfirmationComponent = (
    {
        to,
        cc,
        bcc,
        subject,
        message,
        attachments
    }
) => (
    <article
        className="sent-confirmation"
    >
        <header>
            <ConfirmationComponent />
        </header>
        <div
            className="sent-confirmation__email"
        >
            <div
                className="sent-confirmation__message-details"
            >
                <h2
                    className="sent-confirmation__message-subject"
                >{ subject }</h2>
                <small
                    className="sent-confirmation__address-details"
                >
                    to&nbsp;
                    <span
                        className="sent-confirmation__email-address"
                    >
                        { to.join(', ') }
                    </span>
                </small>
                {
                    cc && cc.length && !!cc[0]
                        ? <small
                            className="sent-confirmation__address-details"
                        >
                            cc&nbsp;
                            <span
                                className="sent-confirmation__email-address"
                            >
                                { cc.join(', ') }
                            </span>
                        </small>
                        : null
                }
                {
                    bcc && bcc.length && !!bcc[0]
                        ? <small
                            className="sent-confirmation__address-details"
                        >
                            bcc&nbsp;
                            <span
                                className="sent-confirmation__email-address"
                            >
                                { bcc.join(', ') }
                            </span>
                        </small>
                        : null
                }
            </div>
            <div
                className="sent-confirmation__message-body"
            >
                { message }
            </div>
            <div
                className="sent-confirmation__attachments"
            >
                {
                    (attachments && attachments.length && attachments.map(
                        (attachment) => (
                            <SentAttachmentThumbnailComponent
                                key={ attachment.id }
                                name={ attachment.name }
                                thumb={ attachment.fileContents }
                                mimeType={ attachment.type }
                            />
                        )
                    )) || null
                }
            </div>
        </div>
    </article>
)