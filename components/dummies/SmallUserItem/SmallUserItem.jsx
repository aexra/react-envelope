import { useTheme } from '../../../hooks/useTheme';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './SmallUserItem.module.css';
import userIconD from '../../../assets/images/user.png';
import userIconL from '../../../assets/images/user-b.png';

export const SmallUserItem = ({ ref, className, avatar, username, name }) => {
    const { isLight } = useTheme();

    return (
        <HBoxPanel gap='5px'
                   valign='center'
                   ref={ref}
                   className={`${className} ${css.container}`}>
            <img src={avatar ?? isLight ? userIconL : userIconD} alt="Avatar" className={`icon-s round`}/>
            <VBoxPanel>
                <span className={css.username}>{username}</span>
                <span className={css.name}>{name}</span>
            </VBoxPanel>
        </HBoxPanel>
    );
};