import React from 'react';

import './subject-line.styles.scss';

export const SubjectLineComponent = (
    {
        max = 100,
        placeholder = "Subject",
        whenChanged
    }
) => (
    <label
        className="subject-input"
    >
        <span
            className="subject-input__label"
        >
            Subject
        </span>
        <input
            className="subject-input__input-field"
            type="text"
            placeholder={ placeholder }
            maxLength={ max }
            onChange={ whenChanged }
        />
    </label>
)