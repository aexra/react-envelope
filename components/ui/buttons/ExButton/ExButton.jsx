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
    type
}) {
    const styles = {
        'info': css.info,
        'success': css.success,
        'warning': css.warning,
        'error': css.error,
        'tip': css.tip,
        'flat': css.flat
    };

    return (
        <button ref={ref}
                className={`${className} ${css.button} ${type && styles[type]} padh20`}
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