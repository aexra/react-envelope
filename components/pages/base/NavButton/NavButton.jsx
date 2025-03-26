import { NavLink } from 'react-router-dom';
import css from './NavButton.module.css';

export const NavButton = ({
    className,
    icon,
    name,
    to
}) => {
    return (
        <NavLink to={to}
                 className={({ isActive, isPending }) => `
                    ${isPending ? css.btn : isActive ? css.active : css.btn} ${css.btn}
                    flex row g5 center-left ${className}
                 `}>
            {icon}
            <span className={`${css.title}`}>{name}</span>
        </NavLink>
    );
};