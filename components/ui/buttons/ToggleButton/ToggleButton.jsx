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
    toggledIcon,
    toggled = false
}) {
    const [isToggled, setToggle] = useState(toggled);

    const handleToggle = (e) => {
        setToggle(!isToggled);
        if (onToggle) onToggle(isToggled);
    };

    return (
        <button ref={ref}
                className={`${className} ${css.button}`}
                onClick={handleToggle}>
                {isToggled ? 
                    <HBoxPanel gap={text && icon ? '5px' : '0px'} valign='center'>
                        <span>{toggledText ? toggledText : text}</span>
                        <div className={`${css.icon} flex row center`}>
                            {icon && (toggledIcon ?? icon)}
                        </div>
                    </HBoxPanel>
                 :
                    <HBoxPanel gap={text && icon ? '5px' : '0px'} valign='center'>
                        <span>{text}</span>
                        <div className={`${css.icon} flex row center`}>
                            {icon}
                        </div>
                    </HBoxPanel>
                }
        </button>
    );
}

export default ToggleButton;