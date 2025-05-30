import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { Sidebar } from '../../wrappers/Sidebar/Sidebar';
import css from './ProfileSidebar.module.css';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import Dropout from '../../wrappers/Dropout/Dropout';
import { SmallUserItem } from '../../dummies/SmallUserItem/SmallUserItem';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import { Close, Logout, Settings, Swap, User, UserAdd } from '../../dummies/Icons';
import { Avatar } from '../../pages/base/Avatar';
import { useClipboard } from '../../../hooks/useClipboard';
import toast from 'react-hot-toast';
import { createPortal } from 'react-dom';

export const ProfileSidebar = ({ ref, className, active, onMinimized }) => {
    const navigate = useNavigate();
    const { auth, user, accounts, logout, switchAuth } = useAuth();
    const { copy } = useClipboard();

    const handleLogout = () => {
        logout(true);
        navigate('/user/auth');
    };

    const handleAccountSwitch = (e) => {
        if (e === accounts.length) {
            navigate('/user/auth');
        } else if (e < accounts.length) {
            switchAuth(accounts.filter(a => a.login !== auth?.login)[e]);
        }
    };

    const handleProfileClick = () => {
        navigate(`/profile/${user.tag}`);
    };

    return createPortal(
        <Sidebar className={`${css.profileSidebar} ${className} ${css.profileSidebar}`}
            ref={ref}
            side={1}
            mode={1}
            active={active}
            onMinimized={onMinimized}
            fullSize='var(--user-sidebar-width)'>
            <VBoxPanel gap='10px'
                padding='10px'>
                <HBoxPanel gap='5px'
                    valign='center'>
                    <Avatar className={'icon-g r100 pointer'} onClick={handleProfileClick}/>
                    <VBoxPanel gap='5px'>
                        <span className='title'>{auth?.login}</span>
                        <span className={`${css.name} caption`}>{user?.firstname} {user?.lastname}</span>
                    </VBoxPanel>
                    <Dropout className={`${css.last}`}
                        side={0}
                        onSelect={handleAccountSwitch}
                        options={[
                            ...(accounts.filter(a => a.login !== auth?.login).map((a, i) =>
                                <SmallUserItem avatar={a.avatar}
                                    username={a.login}
                                    //    name={`${a.firstname} ${a.lastname}`}
                                    key={i} />
                            )),
                            <HBoxPanel className={css.addAccountButton}
                                gap='10px'
                                valign='center'>
                                <UserAdd className='icon-m' />
                                <span>Добавить</span>
                            </HBoxPanel>
                        ]}>
                        <Swap className={`icon-s textbutton pad5 r5`} />
                    </Dropout>
                    <Close className={`icon-s textbutton pad5 r5`} onClick={onMinimized} />
                </HBoxPanel>

                <a className={css.taglink} onClick={() => copy(`${user?.tag}`, () => toast.success('Скопировано!'))}>@{user?.tag}</a>

                <HDivider />

                <ExButton className={`textbutton`}
                    hAlign='start'
                    onClick={() => navigate('/user/settings')}
                    gap='10px'><Settings className='icon-m' /> Настройки</ExButton>

                <HDivider />

                <ExButton iconClassName='rect25'
                    className={`textbutton`}
                    hAlign='start'
                    onClick={handleLogout}
                    gap='10px'><Logout className='icon-m' /> Выйти</ExButton>
            </VBoxPanel>
        </Sidebar>, document.getElementById("modal-root")
    );
}