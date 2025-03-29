import { NavLink } from 'react-router-dom';
import css from './base.module.css';

export const SimpleNavLink = ({
    name,
    to
}) => {
    return (
        <NavLink to={to} className={({ isActive, isPending }) => `
            ${isPending ? '' : isActive ? css.active : ''} ${css.navlink}
            `}>{name}</NavLink>
    );
};