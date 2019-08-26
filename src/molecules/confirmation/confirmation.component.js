import React from 'react';

import './confirmation.styles.scss';

export const ConfirmationComponent = () => (
    <div
        className="confirmation"
    >
        <i
            className="confirmation__icon material-icons"
        >done</i>
        <h1
            className="confirmation__title"
        >Your email has been sent</h1>
    </div>
)