import { useState } from 'react';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import TransparentTextBox from '../TransparentTextBox/TransparentTextBox';
import css from './ExTextBox.module.css';
import ToggleButton from '../../buttons/ToggleButton/ToggleButton';
import visible0 from '../../../../assets/images/visible0.png';
import visible1 from '../../../../assets/images/visible2.png';
import { Visibility, VisibilityOff } from '../../../dummies/Icons';

function ExTextBox({
    ref, 
    className, 
    placeholder, 
    hint = null, 
    icon = null, 
    password = false, 
    textChanged,
    regex,
    inputRef,
    onValidationStateChanged,
    text,
    readOnly = false,
    hintClassName,
    borderless = false
}) {
    const [isFocused, setFocus] = useState(false);
    const [isPasswordVisible, setPasswordVisibility] = useState(password);
    const [isValid, setValidState] = useState(true);
    const [inputEmpty, setInputEmpty] = useState(text == null);

    var validationRegex;

    if (regex) {
        validationRegex = new RegExp(regex);
    }

    const handleFocusChange = (e) => {
        setFocus(e);
        if (!e && inputRef) validate(inputRef.current.value);
    };

    const handleTextChange = (e) => {
        validate(e);

        if (e != "") {
            setInputEmpty(false);
        } else {
            setInputEmpty(true);
        }

        if (textChanged) textChanged(e);
    };

    const validate = (e) => {
        if (validationRegex) {
            var result = validationRegex.test(e);
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
                <TransparentTextBox className={css.input}
                                    onFocusChanged={handleFocusChange}
                                    onTextChanged={handleTextChange}
                                    placeholder={isFocused || !hint ? placeholder : ""}
                                    isPassword={isPasswordVisible}
                                    ref={inputRef}
                                    text={text}
                                    readOnly={readOnly}/>
                {password ? <ToggleButton className={`${!isValid && css.error} ${isFocused && css.highlightedIcon} ${css.icon}`} icon={<VisibilityOff/>} toggledIcon={<Visibility/>} onToggle={setPasswordVisibility}/> : 
                icon && <div className={`${css.icon} ${!isValid && css.error} ${isFocused && css.highlightedIcon}`}>{icon}</div>}
            </HBoxPanel>
        </VBoxPanel>
    );
}

export default ExTextBox;