import { useState } from 'react';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import css from './ToggleButton.module.css';

function ToggleButton({
    ref,
    className,
    onToggle,
    text,
    toggledText,
    icon,
    toggledIcon
}) {
    const [isToggled, setToggle] = useState(false);

    const handleToggle = (e) => {
        setToggle(!isToggled);
        if (onToggle) onToggle(isToggled);
    };

    return (
        <button ref={ref}
                className={`${className} ${css.button}`}
                onClick={handleToggle}>
                {isToggled ? 
                    <HBoxPanel gap='5px'>
                        <span>{toggledText ? toggledText : text}</span>
                        {icon ? <img src={toggledIcon ? toggledIcon : icon} alt="Toggled icon" className={css.icon}/> : <></>}
                    </HBoxPanel>
                 :
                    <HBoxPanel gap='5px'>
                        <span>{text}</span>
                        {icon ? <img src={icon} alt="Icon" className={css.icon}/> : <></>}
                    </HBoxPanel>
                }
        </button>
    );
}

export default ToggleButton;