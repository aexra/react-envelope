import React from 'react';
import css from './RadioBox.module.css';

export const RadioBox = ({
    options,
    selectedValue,
    onChange,
    name = 'radio-group',
    className = '',
    label,
    labelProps = {style: {backgroundColor: 'var(--body-bk-color)'}},
    borderType = 'fullr'
}) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    const getStyle = () => {
        let bt;

        switch (borderType) {
            case 'none': bt = css.none; break;
            case 'full': bt = css.full; break;
            case 'underline': bt = css.underline; break;
            default: bt = css.fullr; break;
        }

        return { bt: bt };
    };

    const style = getStyle();

    return (
        <div className={`${css.radioPanel} ${className} ${style.bt} rel`}>
            <span className={css.label} {...labelProps}>{label}</span>
            {options.map((option) => (
                <label key={option.value} className={css.radioOption}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={handleChange}
                        className={css.radioInput}
                    />
                    <span className={css.radioLabel}>{option.label}</span>
                </label>
            ))}
        </div>
    );
};
