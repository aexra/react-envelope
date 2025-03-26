import { NavLink, useNavigate } from 'react-router-dom';
import css from './NavButton.module.css';

export const NavButton = ({
    className,
    icon,
    name,
    to
}) => {
    // const navigate = useNavigate();
    
    return (
        <NavLink to={to}
                 className={({ isActive, isPending }) => `
                    ${isPending ? css.btn : isActive ? css.active : css.btn} ${css.btn}
                    flex row g5 center-left
                 `}>
            {icon}
            <span className={`${css.title}`}>{name}</span>
        </NavLink>
    );
};