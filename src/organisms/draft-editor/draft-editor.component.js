import React from 'react';

import EmailAddressingArea from './../../organisms/email-addressing-area/email-addressing-area.container';
import { SubjectLineComponent } from './../../molecules/subject-line/subject-line.component';
import { MailMessageEditorComponent } from './../../molecules/mail-message-editor/mail-message-editor.component';
import { DraftButtonsComponent } from './../../molecules/draft-buttons/draft-buttons.component';
import { AttachmentsAreaComponent } from './../../organisms/attachments-area/attachments-area.component';

import './draft-editor.styles.scss';

export const DraftEditorComponent = (
    {
        attachments,
        sendable,
        sendMail,
        setSubject,
        setMessage
    }
) => (
    <article
        className="draft-editor"
    >
        <header
            className="draft-editor__header"
        >
            <h1
                className="draft-editor__title"
            >Send E-mail</h1>
        </header>
        <div
            className="draft-editor__main"
        >
            <div
                className="draft-editor__addressing"
            >
                <EmailAddressingArea />
            </div>
            <div
                className="draft-editor__subject"
            >
                <SubjectLineComponent
                    max={100}
                    whenChanged={ setSubject }
                />
            </div>
            <div
                className="draft-editor__message"
            >
                <MailMessageEditorComponent
                    placeholder="Message"
                    whenChanged={ setMessage }
                />
            </div>
            <div
                className="draft-editor__attached-files"
            >
                {
                    attachments && attachments.length
                        ? <AttachmentsAreaComponent
                            attachmentList={ attachments }
                        />
                        : null
                }
            </div>
            <div
                className="draft-editor__controls"
            >
                <DraftButtonsComponent
                    sendable={ sendable }
                    sendMail={ sendMail }
                />
            </div>
        </div>
    </article>
);