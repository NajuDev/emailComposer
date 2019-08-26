import React from 'react';

// import { debounce } from 'lodash';

import { deconstructEmailArray } from './../../utils/handle-email-arrays';

import './email-input.styles.scss';

export const EmailInputComponent = (
    {
        label,
        value,
        valid,
        whenChanged
    }
) => (
    <label
        className="email-input"
    >
        <span
            className="email-input__label"
        >
            {label}
        </span>
        <input
            className={'email-input__input-field' + `${ !valid ? ' email-input__input-field--invalid' : ''}`}
            type="email"
            placeholder={label}
            value={deconstructEmailArray(value)}
            onChange={ whenChanged }
        />
    </label>
);