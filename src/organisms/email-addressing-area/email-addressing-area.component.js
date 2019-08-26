import React from 'react';

import { EmailInputComponent } from './../../molecules/email-input/email-input.component';

import './email-addressing-area.styles.scss';

export const EmailAddressingArea = (
    {
        to,
        toValid,
        cc,
        ccValid,
        bcc,
        bccValid,
        setToField,
        setCCField,
        setBCCField,
    }
) => (
    <section
        className="email-addressing-area"
    >
        <EmailInputComponent
            label="To"
            value={to}
            valid={toValid}
            whenChanged={setToField}
        />
        <EmailInputComponent
            label="CC"
            value={cc}
            valid={ccValid}
            whenChanged={setCCField}
        />
        <EmailInputComponent
            label="BCC"
            value={bcc}
            valid={bccValid}
            whenChanged={setBCCField}
        />
    </section>
);