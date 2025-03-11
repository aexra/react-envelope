import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './SmallUserItem.module.css';

export const SmallUserItem = ({ ref, className, avatar, username, name }) => {
    return (
        <HBoxPanel gap='5px'
                   valign='center'
                   ref={ref}
                   className={`${className} ${css.container}`}>
            <img src={avatar} alt="Avatar" className={`icon-s round`}/>
            <VBoxPanel>
                <span className={css.username}>{username}</span>
                <span className={css.name}>{name}</span>
            </VBoxPanel>
        </HBoxPanel>
    );
};