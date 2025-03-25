import { useEffect, useState } from 'react';
import HBoxPanel from '../../../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../../../layouts/VBoxPanel/VBoxPanel';
import css from './ExTextBox.module.css';
import ToggleButton from '../../../buttons/ToggleButton/ToggleButton';
import { Visibility, VisibilityOff } from '../../../../dummies/Icons';

const ExTextBox = ({
    ref, 
    className, 
    placeholder, 
    hint = null, 
    icon = null, 
    password = false, 
    textChanged,
    onSubmit,
    regex,
    inputRef,
    onValidationStateChanged,
    text,
    readonly = false,
    hintClassName,
    borderless = false,
    wrap = false,
    count = false,
    limit = null
}) => {
    const [isFocused, setFocus] = useState(false);
    const [isPasswordVisible, setPasswordVisibility] = useState(password);
    const [isValid, setValidState] = useState(true);
    const [inputEmpty, setInputEmpty] = useState(text == null);

    var validationRegex;

    if (regex) {
        validationRegex = new RegExp(regex);
    }

    useEffect(() => {
        if (text != '') {
            setInputEmpty(false);
        } else {
            setInputEmpty(true);
        }

        validate(text);
    }, [text])

    const handleFocusChange = (focused) => {
        setFocus(focused);
        if (!focused && inputRef) validate(inputRef.current.value);
        if (!focused && text) validate(text);
    };

    const handleTextChange = (value) => {
        validate(value);

        if (value != "") {
            setInputEmpty(false);
        } else {
            setInputEmpty(true);
        }

        if (textChanged) textChanged(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onSubmit) {
            onSubmit(e.target.value);
        }
    };

    const validate = (value) => {
        if (validationRegex) {
            var result = validationRegex.test(value);
            if (result != isValid) {
                setValidState(result);
                if (onValidationStateChanged) onValidationStateChanged(result);
            }
        }
    };

    return (
        <>
            <VBoxPanel ref={ref} className={`${className} ${css.box} ${borderless && css.borderless} ${!isValid && css.error} ${isFocused && css.highlightedBox}`} gap='0px'>
                {hint && <span className={`${hintClassName} ${inputEmpty && !isFocused && css.hintOverlap} ${!isValid && css.error} ${isFocused && css.highlightedHint} ${css.hint}`}>{hint}</span>}
                <div className={`${!isValid && css.error} ${css.expander} ${isFocused && css.highlightedExpander}`}></div>
                <HBoxPanel gap='5px' valign='center'>
                    {readonly ? (
                        <span className={`${css.input}`}>{text}</span>
                    ) : (
                        wrap ? 
                        <textarea
                            ref={inputRef}
                            className={`${css.textarea} ${wrap ? css.wrap : ''}`}
                            onKeyDown={handleKeyDown}
                            onFocus={() => handleFocusChange(true)}
                            onBlur={() => handleFocusChange(false)}
                            onChange={(e) => handleTextChange(e.target.value)}
                            placeholder={isFocused || !hint ? placeholder : ""}
                            type={isPasswordVisible ? "password" : "text"}
                            value={text}
                            readOnly={readonly}
                        /> :
                        <input
                            ref={inputRef}
                            className={`${css.input} ${wrap ? css.wrap : ''}`}
                            onKeyDown={handleKeyDown}
                            onFocus={() => handleFocusChange(true)}
                            onBlur={() => handleFocusChange(false)}
                            onChange={(e) => handleTextChange(e.target.value)}
                            placeholder={isFocused || !hint ? placeholder : ""}
                            type={isPasswordVisible ? "password" : "text"}
                            value={text}
                            readOnly={readonly}
                        />
                    )}
                    {password ? (
                        <ToggleButton 
                            className={`${!isValid && css.error} ${isFocused && css.highlightedIcon} ${css.icon}`} 
                            icon={<VisibilityOff/>} 
                            toggledIcon={<Visibility/>} 
                            onToggle={setPasswordVisibility}
                        />
                    ) : (
                        icon && <div className={`${css.icon} ${!isValid && css.error} ${isFocused && css.highlightedIcon}`}>{icon}</div>
                    )}
                </HBoxPanel>
            </VBoxPanel>
            { limit ? 
                <HBoxPanel className='h-last g5'>
                    <span style={{
                        color: text.length > limit ? 'var(--error-color)' : 'var(--accent-color)',
                        transition: 'all 0.2s ease'
                    }}>{text.length}</span>
                    <span style={{color: 'var(--accent-color)'}}>/</span>
                    <span style={{color: 'var(--accent-color)'}}>{limit}</span>
                </HBoxPanel> :
                (count && <span style={{color: 'var(--accent-color)'}} className='h-last'>{text.length}</span>)
            }
        </>
    );
}

export default ExTextBox;