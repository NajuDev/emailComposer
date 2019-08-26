import React from 'react';

import DraftEditorComponent from './../../organisms/draft-editor/draft-editor.container';
import SentConfirmationComponent from './../../organisms/sent-confirmation/sent-confirmation.container';

import './main-view.styles.scss';

export const MainViewComponent = (
    {
        sent,
        editing,
    }
) => (
    <div
        className="main-view"
    >
        {
            editing
                ? <DraftEditorComponent />
                : <SentConfirmationComponent />
        }
    </div>
)