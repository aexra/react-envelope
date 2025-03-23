import { use, useCallback, useEffect, useState } from 'react';
import css from './TextBox.module.css';
import ToggleButton from '../../../buttons/ToggleButton/ToggleButton';
import { Visibility, VisibilityOff } from '../../../../dummies/Icons';

// value - внешнее состояние
// defaultValue - начальное значение состояния текста, если не используется value
// borderType: { none, full, fullr, underline }
// labelType: { inline, above }
export const TextBox = ({
    ref,
    className,
    value,
    defaultValue = '',
    onChange,
    borderType,
    labelType = 'inline',
    placeholder,
    label,
    readonly = false,
    labelBackground,
    labelProps,
    password = false,
    icon,
    regex
}) => {
    const [_isFocused, _setIsFocused] = useState(false);
    const [_value, _setValue] = useState(defaultValue);
    const [_error, _setError] = useState(false);
    const [_visible, _setVisible] = useState(false);
    const [bt, setBt] = useState('');
    const [lt, setLt] = useState('');

    const formedLabelBackground = labelBackground ?? (labelType === 'inline' ? 'var(--body-bk-color)' : 'transparent');

    var regexp = undefined;
    if (regex) regexp = RegExp(regex);

    const validate = (e) => {
        if (regexp) _setError(!regexp.test(e));
    };

    const handleChange = useCallback((e) => {
        if (!value) _setValue(e.target.value);
        if (onChange) { onChange(e.target.value); }
        validate(e.target.value);
    }, [onChange]);

    const handleFocus = useCallback((e) => {
        _setIsFocused(e);
        if (!e) {
            if (value) validate(value);
            else validate(_value);
        }
    });

    const handleVisibility = useCallback((e) => {
        _setVisible(!_visible);
    });

    useEffect(() => {
        const mapBorderType = (bt) => {
            switch (bt) {
                case 'none': return css.none;
                case 'full': return css.full;
                case 'fullr': return css.fullr;
                case 'underline': return css.underline;
                default: return undefined;
            }
        };

        setBt(mapBorderType(borderType));
    }, [borderType]);

    useEffect(() => {
        const mapLabelType = (lt) => {
            switch (lt) {
                case 'inline': return css.inline;
                case 'above': return css.above;
                default: return undefined;
            }
        };

        setLt(mapLabelType(labelType));
    }, [labelType]);

    return (
        <div className={`${css.container} ${className} ${bt} ${_error && css.error} ${_isFocused && css.focused} flex row g5`} ref={ref}>
            {label && <span className={`${css.label} ${lt} r5`} style={{background: formedLabelBackground}} {...labelProps}>{label}</span>}
            <input type={password && !_visible ? 'password' : "text"}
                   value={value ?? _value}
                   onChange={handleChange}
                   placeholder={placeholder}
                   className={`${css.input}`}
                   readOnly={readonly}
                   onFocus={() => handleFocus(true)}
                   onBlur={() => handleFocus(false)}/>
            {password && (icon ?? <ToggleButton icon={<VisibilityOff/>}
                          toggledIcon={<Visibility/>}
                          onToggle={handleVisibility}/>)}
            {icon}
        </div>
    );
}; 