import React from 'react';
import css from './CheckBox.module.css';

const CheckBox = ({
    className = '',
    label = '',
    checked = false,
    onChange = () => { }
}) => {
    const handleChange = (e) => {
        onChange(e.target.checked);
    };

    return (
        <label className={`${css.checkboxContainer} ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className={css.checkboxInput}
            />
            <span className={css.checkboxCheckmark}></span>
            {label && <span className={css.checkboxLabel}>{label}</span>}
        </label>
    );
};

export default CheckBox;