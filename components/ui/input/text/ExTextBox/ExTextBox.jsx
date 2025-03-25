import { useEffect, useState } from 'react';
import HBoxPanel from '../../../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../../../layouts/VBoxPanel/VBoxPanel';
import css from './ExTextBox.module.css';
import ToggleButton from '../../../buttons/ToggleButton/ToggleButton';
import { Visibility, VisibilityOff } from '../../../../dummies/Icons';

function ExTextBox({
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
    wrap = false
}) {
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
        <VBoxPanel ref={ref} className={`${className} ${css.box} ${borderless && css.borderless} ${!isValid && css.error} ${isFocused && css.highlightedBox}`} gap='0px'>
            {hint && <span className={`${hintClassName} ${inputEmpty && !isFocused && css.hintOverlap} ${!isValid && css.error} ${isFocused && css.highlightedHint} ${css.hint}`}>{hint}</span>}
            <div className={`${!isValid && css.error} ${css.expander} ${isFocused && css.highlightedExpander}`}></div>
            <HBoxPanel gap='5px' valign='center'>
                {readonly ? (
                    <span className={`${css.input}`}>{text}</span>
                ) : (
                    <input
                        ref={inputRef}
                        className={`${css.input} flex row flex-1`}
                        onKeyDown={handleKeyDown}
                        onFocus={() => handleFocusChange(true)}
                        onBlur={() => handleFocusChange(false)}
                        onChange={(e) => handleTextChange(e.target.value)}
                        placeholder={isFocused || !hint ? placeholder : ""}
                        type={isPasswordVisible ? "password" : "text"}
                        value={text}
                        readOnly={readonly}
                        style={{
                            whiteSpace: wrap ? 'normal' : 'nowrap'
                        }}
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
    );
}

export default ExTextBox;