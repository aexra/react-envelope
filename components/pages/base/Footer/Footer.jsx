import { useEffect, useState } from 'react';
import css from './Footer.module.css';
import { useNavigation } from '../../../../hooks/useNavigation';
import { SimpleNavLink } from '../SimpleNavLink';

export const Footer = ({
    routes,
    navLink = SimpleNavLink
}) => {
    const [links, setLinks] = useState([]);
    const { navlinks } = useNavigation();

    useEffect(() => {
        if (routes) {
            setLinks(navlinks(navLink, routes));
        }
    }, []);

    return (
        <div className={`flex col ${css.foo}`}>
            <div className={`flex row center g20 ${css.links}`}>
                {links}
            </div>
            <span className={`${css.powered} h-last v-last`}>Powered by <a target='blank' href='https://github.com/aexra'>aexra</a></span>
        </div>
    );
};