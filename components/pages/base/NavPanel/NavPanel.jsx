import { useState } from 'react';
import { useNavigation } from '../../../../hooks/useNavigation';
import { TextBox } from '../../../ui/input/text/TextBox/TextBox';
import css from './NavPanel.module.css';
import { NavButton } from '../NavButton/NavButton';

export const NavPanel = ({
    className
}) => {
    const { navlinks } = useNavigation();

    const [query, setQuery] = useState('');

    return (
        <div className={`${className} flex col g10 v-full`}>
            <TextBox value={query}
                     onChange={(e) => setQuery(e)}
                     placeholder={'Введите запрос'}
                     label={'Поиск'}
                     borderType={'fullr'}
                     className={css.filter}/>
            {navlinks(NavButton)}
        </div>
    );
};