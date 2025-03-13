import css from './TransparentTextBox.module.css';

function TransparentTextBox({ 
    ref, 
    className, 
    style, 
    onSubmit = null, 
    onFocusChanged = null, 
    isPassword = false, 
    onTextChanged = null,
    placeholder,
    text
}) {
    const handleFocusGain = () => {
        if (onFocusChanged) onFocusChanged(true);
    };
    
    const handleFocusLose = () => {
        if (onFocusChanged) onFocusChanged(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && onSubmit) {
            onSubmit(e.target.value);
        }
    };

    const handleTextChanged = (e) => {
        if (onTextChanged) {
            onTextChanged(e.target.value);
        }
    };
    
    return (
        <input ref={ref} 
               className={`${className} ${css.input}`} 
               style={style} 
               type={isPassword ? "password" : "text"}
               onKeyDown={handleKeyDown}
               onFocus={handleFocusGain}
               onBlur={handleFocusLose}
               onChange={handleTextChanged}
               placeholder={placeholder}
               value={text}/>
    );
}

export default TransparentTextBox;