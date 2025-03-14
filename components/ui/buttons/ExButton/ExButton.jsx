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
                className={`${className} ${css.button} padh20`}
                onClick={onClick}>
            <HBoxPanel gap={gap}
                       halign={hAlign}
                       valign={vAlign}>
                {leftIcon}
                {children}
                {rightIcon}
            </HBoxPanel>
        </button>
    );
}

export default ExButton;