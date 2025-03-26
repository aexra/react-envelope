import { useNavigate } from 'react-router-dom';
import ExButton from '../ExButton/ExButton';
import css from './NavSidebarButton.module.css';

export const NavSidebarButton = ({
    ref,
    className,
    icon,
    name,
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
                  hAlign='start'
                  gap='25px'
                  iconClassName={`icon-s ${iconClassName}`}>
            <div className={`icon-m flex center`}>
                {icon}
            </div>
            <span className='nowrap'>{name}</span>
        </ExButton>
    );
};