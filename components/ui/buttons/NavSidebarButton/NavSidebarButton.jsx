import { useNavigate } from 'react-router-dom';
import ExButton from '../ExButton/ExButton';
import css from './NavSidebarButton.module.css';

export const NavSidebarButton = ({
    ref,
    className,
    icon,
    text,
    onClick,
    to,
    iconClassName
}) => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (to) navigate(to);
    };
    
    return (
        <ExButton ref={ref}
                  className={`${className} ${css.navButton} textbutton`}
                  onClick={handleClick}
                  leftIcon={icon}
                  hAlign='start'
                  gap='25px'
                  iconClassName={`icon-s ${iconClassName}`}>
            {text}
        </ExButton>
    );
};