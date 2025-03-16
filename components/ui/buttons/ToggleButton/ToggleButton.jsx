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
                    <HBoxPanel gap='5px'>
                        <span>{toggledText ? toggledText : text}</span>
                        <div className={css.icon}>
                            {icon && (toggledIcon ?? icon)}
                        </div>
                    </HBoxPanel>
                 :
                    <HBoxPanel gap='5px'>
                        <span>{text}</span>
                        <div className={css.icon}>
                            {icon}
                        </div>
                    </HBoxPanel>
                }
        </button>
    );
}

export default ToggleButton;