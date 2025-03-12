import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { Sidebar } from '../../wrappers/Sidebar/Sidebar';
import css from './ProfileSidebar.module.css';
import personIcon from '../../../assets/images/user.png';
import personIconB from '../../../assets/images/user-b.png';
import logoutIconB from '../../../assets/vectors/logout-b.svg';
import logoutIconW from '../../../assets/vectors/logout-g.svg';
import swapIconB from '../../../assets/vectors/swap-b.svg';
import swapIconW from '../../../assets/vectors/swap-g.svg';
import closeIconB from '../../../assets/vectors/close-b.svg';
import closeIconW from '../../../assets/vectors/close-g.svg';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import Dropout from '../../wrappers/Dropout/Dropout';
import addUserIcon from '../../../assets/images/add-user.png';
import { SmallUserItem } from '../../dummies/SmallUserItem/SmallUserItem';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import { useTheme } from '../../../hooks/useTheme';

export const ProfileSidebar = ({ ref, className, active, onMinimized }) => {
    const navigate = useNavigate();
    const { auth, accounts, login, logout, logoutAuth, switchAuth } = useAuth();
    const { theme, isLight } = useTheme();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    const handleAccountSwitch = (e) => {
        if (e === accounts.length) {
            navigate('/login');
        } else if (e < accounts.length) {
            switchAuth(accounts.filter(a => a.login !== auth?.login)[e]);
        }
    };

    return (
        <Sidebar className={`${css.profileSidebar} ${className} ${css.profileSidebar}`}
                 ref={ref}
                 side={1}
                 mode={1}
                 active={active}
                 onMinimized={onMinimized}
                 fullSize='300px'>
            <VBoxPanel gap='10px'
                       padding='10px'>
                <HBoxPanel gap='5px'
                           valign='center'>
                    <img src={theme === 'light' ? personIconB : personIcon} alt="Avatar" className={`icon-g round`}/>
                    <VBoxPanel gap='5px'>
                        <span className='title'>{auth?.login}</span>
                        <span className={`${css.name} caption`}>{auth?.firstname} {auth?.lastname}</span>
                    </VBoxPanel>
                    <Dropout className={`${css.last}`}
                             side={0}
                             onSelect={handleAccountSwitch}
                             options={[
                                ...(accounts.filter(a => a.login !== auth?.login).map((a, i) => 
                                    <SmallUserItem avatar={a.avatar}
                                                   username={a.login}
                                                //    name={`${a.firstname} ${a.lastname}`}
                                                   key={i}/>
                                )),
                                <HBoxPanel className={css.addAccountButton}
                                           gap='10px'
                                           valign='center'>
                                    <img src={addUserIcon} alt="" className={`icon-s`}/>
                                    <span>Добавить</span>
                                </HBoxPanel>
                             ]}>
                        <RoundImageButton image={isLight ? swapIconB : swapIconW} className={`icon-l textbutton pad5`}/>
                    </Dropout>
                    <RoundImageButton image={isLight ? closeIconB : closeIconW} className={`icon-l textbutton pad5`} onClick={onMinimized}/>
                </HBoxPanel>

                <HDivider/>

                <ExButton leftIcon={isLight ? logoutIconB : logoutIconW}
                          iconClassName='rect25'
                          className={`textbutton`}
                          hAlign='start'
                          onClick={handleLogout}>Выйти</ExButton>
            </VBoxPanel>
        </Sidebar>
    );
}