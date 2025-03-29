import { use, useCallback, useEffect, useState } from 'react';
import css from './TextBox.module.css';
import ToggleButton from '../../../buttons/ToggleButton/ToggleButton';
import { Visibility, VisibilityOff } from '../../../../dummies/Icons';
import HBoxPanel from '../../../../layouts/HBoxPanel/HBoxPanel';

// value - внешнее состояние
// defaultValue - начальное значение состояния текста, если не используется value
// borderType: { none, full, fullr, underline }
// borderBehaviour: { default, focus }
// labelType: { inline, above }
// type: { default, color }
export const TextBox = ({
    ref,
    className,
    value,
    defaultValue = '',
    onChange,
    borderType,
    borderBehaviour,
    labelType = 'inline',
    type,
    placeholder,
    label,
    readonly = false,
    labelBackground,
    labelProps,
    password = false,
    icon,
    regex,
    borderless = false,
    shadowless = false,
    wrap = false,
    limit = null,
    strictLimit = false,
    count = false,
    min = 0
}) => {
    const [_isFocused, _setIsFocused] = useState(false);
    const [_hasBlurred, _setHasBlurred] = useState(false);
    const [_value, _setValue] = useState(defaultValue);
    const [_error, _setError] = useState(false);
    const [_visible, _setVisible] = useState(false);
    const [bt, setBt] = useState('');
    const [bh, setBH] = useState('');
    const [lt, setLt] = useState('');
    const [t, setT] = useState('');

    const formedLabelBackground = labelBackground ?? (labelType === 'inline' ? 'var(--body-bk-color)' : 'transparent');

    const shouldShowError = _hasBlurred && (
        value?.length < min || 
        value?.length > limit || 
        _value?.length < min || 
        _value?.length > limit
    );

    var regexp = undefined;
    if (regex) regexp = RegExp(regex);

    const validate = (e) => {
        if (regexp) _setError(!regexp.test(e));
    };

    const handleChange = useCallback((e) => {
        let processedValue = e.target.value;
    
        if (strictLimit && limit && processedValue.length > limit) {
            processedValue = processedValue.slice(0, limit);
        }
    
        if (!value) _setValue(processedValue);
        if (onChange) { onChange(processedValue); }
        validate(processedValue);
    }, [onChange]);

    const handleFocus = useCallback((e) => {
        _setIsFocused(e);
        if (!e) {
            _setHasBlurred(true);
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

    useEffect(() => {
        const mapType = (t) => {
            switch (t) {
                case 'color': return css.colorBox;
                default: return undefined;
            }
        }

        setT(mapType(type));
    }, [type]);

    useEffect(() => {
        const mapBH = (bh) => {
            switch (bh) {
                case 'focus': return css.borderFocusOnly;
                default: return undefined;
            }
        };

        setBH(mapBH(borderBehaviour));
    }, [borderBehaviour]);

    return (
        <div className={`${css.container} ${className} ${bt} ${t} ${bh} ${_error && css.error} ${_isFocused && css.focused} ${borderless && css.borderless} ${shadowless && css.shadowless} flex row g5`} ref={ref}>
            {label && <span className={`${css.label} ${lt} r5`} style={{background: formedLabelBackground}} {...labelProps}>{label}</span>}
            {(limit || min || count) && <HBoxPanel gap={'5px'} className={css.counter} style={{background: formedLabelBackground}}>
                    <span style={{
                        color: shouldShowError 
                            ? 'var(--error-color)' 
                            : _isFocused ? 'var(--accent-color)' : 'var(--disabled-accent-color)'
                        }}>
                        {value?.length ?? _value.length}
                    </span>

                    {limit && <span style={{ color: shouldShowError ? 'var(--error-color)' : _isFocused ? 'var(--accent-color)' : 'var(--disabled-accent-color)' }}>/</span>}
                    {limit && <span style={{ color: shouldShowError ? 'var(--error-color)' : _isFocused ? 'var(--accent-color)' : 'var(--disabled-accent-color)' }}>{limit}</span>}
                </HBoxPanel>}
            {wrap ? 
            <textarea type={password && !_visible ? 'password' : "text"}
                      value={value ?? _value}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`${css.textarea}`}
                      readOnly={readonly}
                      onFocus={() => handleFocus(true)}
                      onBlur={() => handleFocus(false)}/> : 
            <input type={password && !_visible ? 'password' : "text"}
                   value={value ?? _value}
                   onChange={handleChange}
                   placeholder={placeholder}
                   className={`${css.input}`}
                   readOnly={readonly}
                   onFocus={() => handleFocus(true)}
                   onBlur={() => handleFocus(false)}/>}
            {password && (icon ?? <ToggleButton icon={<VisibilityOff/>}
                          toggledIcon={<Visibility/>}
                          onToggle={handleVisibility}/>)}
            {icon}
        </div>
    );
}; 