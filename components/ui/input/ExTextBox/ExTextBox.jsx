import { useState } from 'react';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import TransparentTextBox from '../TransparentTextBox/TransparentTextBox';
import css from './ExTextBox.module.css';
import ToggleButton from '../../buttons/ToggleButton/ToggleButton';
import visible0 from '../../../../assets/images/visible0.png';
import visible1 from '../../../../assets/images/visible2.png';

function ExTextBox({
    ref, 
    className, 
    placeholder, 
    hint = null, 
    icon = null, 
    isPassword = false, 
    textChanged,
    regex,
    inputRef,
    onValidationStateChanged,
    text,
}) {
    const [isFocused, setFocus] = useState(false);
    const [isPasswordVisible, setPasswordVisibility] = useState(isPassword);
    const [isValid, setValidState] = useState(true);
    const [inputEmpty, setInputEmpty] = useState(true);

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
        <VBoxPanel ref={ref} className={`${className} ${css.box} ${!isValid ? css.errorBox : ""} ${isFocused ? css.highlightedBox : ""}`} gap='5px'>
            {hint ? <span className={`${inputEmpty && !isFocused ? css.hintOverlap : ""} ${!isValid ? css.errorHint : ""} ${isFocused ? css.highlightedHint : ""} ${css.hint}`}>{hint}</span> : <></>}
            <div className={`${!isValid ? css.errorIcon : ""} ${css.expander} ${isFocused ? css.highlightedExpander : ""}`}></div>
            <HBoxPanel gap='5px' valign='center'>
                <TransparentTextBox className={css.input}
                                    onFocusChanged={handleFocusChange}
                                    onTextChanged={handleTextChange}
                                    placeholder={isFocused ? placeholder : ""}
                                    isPassword={isPasswordVisible}
                                    ref={inputRef}
                                    text={text}/>
                {isPassword ? <ToggleButton className={`${!isValid ? css.errorIcon : ""} ${isFocused ? css.highlightedIcon : ""} ${css.vButton}`} icon={visible0} toggledIcon={visible1} onToggle={setPasswordVisibility}/> : icon ? <img className={`${!isValid ? css.errorIcon : ""} ${isFocused ? css.highlightedIcon : ""} ${css.icon}`} src={icon} alt="Icon"/> : <></>}
            </HBoxPanel>
        </VBoxPanel>
    );
}

export default ExTextBox;