import { useEffect, useState } from 'react';
import { useNavigation } from '../../../../hooks/useNavigation';
import { TextBox } from '../../../ui/input/text/TextBox/TextBox';
import css from './NavPanel.module.css';
import { NavButton } from '../NavButton/NavButton';

export const NavPanel = ({
    className
}) => {
    const { routes, navlinks } = useNavigation();

    const [query, setQuery] = useState('');
    const [links, setLinks] = useState([]);

    useEffect(() => {
        setLinks(navlinks(NavButton));
    }, [routes]);

    useEffect(() => {
        setLinks(navlinks(NavButton, routes.filter(r => r.name.toLowerCase().startsWith(query.toLowerCase()))));
    }, [query]);

    return (
        <div className={`${className} flex col g5 v-full`}>
            <TextBox value={query}
                     onChange={(e) => setQuery(e)}
                     placeholder={'Фильтр'}
                     borderType={'fullr'}
                     type={'color'}
                     className={`${css.filter} end-self`}
                     borderless shadowless/>
            {links}
        </div>
    );
};