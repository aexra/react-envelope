import { useTheme } from '../../../hooks/useTheme';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { User } from '../Icons';
import css from './SmallUserItem.module.css';

export const SmallUserItem = ({ ref, className, avatar, username, name }) => {
    const { isLight } = useTheme();

    return (
        <HBoxPanel gap='5px'
                   valign='center'
                   ref={ref}
                   className={`${className} ${css.container}`}>
            {avatar ? <img src={avatar} alt="Avatar" className={`icon-s round`}/> : <User className='icon-m'/>}
            <VBoxPanel>
                <span className={css.username}>{username}</span>
                <span className={css.name}>{name}</span>
            </VBoxPanel>
        </HBoxPanel>
    );
};