import { use, useCallback, useEffect, useState } from 'react';
import css from './TextBox.module.css';

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
    labelProps
}) => {
    const [_isFocused, _setIsFocused] = useState(false);
    const [_value, _setValue] = useState(defaultValue);
    const [bt, setBt] = useState('');
    const [lt, setLt] = useState('');

    const formedLabelBackground = labelBackground ?? (labelType === 'inline' ? 'var(--body-bk-color)' : 'transparent');

    const handleChange = useCallback((e) => {
        if (!value) _setValue(e.target.value);
        if (onChange) { onChange(e.target.value); }
    }, [onChange]);

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
        <div className={`${css.container} ${className} ${bt} ${_isFocused && css.focused}`} ref={ref}>
            {label && <span className={`${css.label} ${lt} r5`} style={{background: formedLabelBackground}} {...labelProps}>{label}</span>}
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