import { useState } from 'react';
import css from './TextBox.module.css';

// value - внешнее состояние
// defaultValue - начальное значение состояния текста, если не используется value
// borderType: {
//   none,
//   full,
//   fullr,
//   underline
// }
export const TextBox = ({
    ref,
    className,
    value,
    defaultValue = '',
    onChange,
    borderType,
    placeholder,
    label,
    readonly = false
}) => {
    const [_value, _setValue] = useState(defaultValue);
    const [_isFocused, _setIsFocused] = useState(false);

    const handleChange = (e) => {
        if (value) {
            if (onChange) {
                onChange(e.target.value);
            }
        }
        else {
            _setValue(e.target.value);
        }
    };

    const mapBorderType = (bt) => {
        switch (borderType) {
            case 'none': return css.none;
            case 'full': return css.full;
            case 'fullr': return css.fullr;
            case 'underline': return css.underline;
            default: return undefined;
        }
    };

    return (
        <div className={`${css.container} ${className} ${mapBorderType(borderType)} ${_isFocused && css.focused}`} ref={ref}>
            {label && <span className={css.label}>{label}</span>}
            <input type="text"
                   value={value ?? _value}
                   onChange={handleChange}
                   placeholder={placeholder}
                   className={`${css.input}`}
                   readOnly={readonly}
                   onFocus={() => _setIsFocused(true)}
                   onBlur={() => _setIsFocused(false)}/>
        </div>
    );
}; 