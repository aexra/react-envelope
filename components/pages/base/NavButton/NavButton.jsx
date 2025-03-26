import { useNavigate } from 'react-router-dom';
import css from './NavButton.module.css';

export const NavButton = ({
    className,
    icon,
    name,
    to
}) => {
    const navigate = useNavigate();
    
    return (
        <button className={`flex row center-left g10 bb pointer ${css.btn} ${className}`} onClick={() => navigate(to)}>
            {icon}
            <span className={`${css.title}`}>{name}</span>
        </button>
    );
};