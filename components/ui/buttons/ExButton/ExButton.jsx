import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';
import css from './ExButton.module.css';

function ExButton({
    ref, 
    className, 
    children, 
    leftIcon, 
    rightIcon,
    onClick,
    hAlign = 'center',
    vAlign = 'center',
    gap = '5px',
    iconClassName = 'icon-m'
}) {
    return (
        <button ref={ref}
                className={`${className} ${css.button}`}
                onClick={onClick}>
            <HBoxPanel gap={gap}
                       halign={hAlign}
                       valign={vAlign}>
                {leftIcon && <img className={iconClassName} src={leftIcon} alt="lIcon"/>}
                {children}
                {rightIcon && <img className={iconClassName} src={rightIcon} alt="rIcon"/>}
            </HBoxPanel>
        </button>
    );
}

export default ExButton;