import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import { Sidebar } from '../../wrappers/Sidebar/Sidebar';
import css from './ProfileSidebar.module.css';
import personIcon from '../../../assets/images/user.png';
import logoutIcon from '../../../assets/images/logout.png';
import switchIcon from '../../../assets/images/swap.png';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import Dropout from '../../wrappers/Dropout/Dropout';
import addUserIcon from '../../../assets/images/add-user.png';
import { SmallUserItem } from '../../dummies/SmallUserItem/SmallUserItem';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

export const ProfileSidebar = ({ ref, className, active, onMinimized }) => {
    const navigate = useNavigate();
    const { auth, accounts, login, logout, logoutAuth, switchAuth } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    const handleAccountSwitch = (e) => {
        if (e === accounts.length) {
            navigate('/login');
        } else if (e < accounts.length) {
            switchAuth(accounts[e]);
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
                    <img src={personIcon} alt="Avatar" className={`icon-g round`}/>
                    <VBoxPanel gap='5px'>
                        <span>{auth?.credentials?.username}</span>
                        <span className={css.name}>{auth?.data?.firstname} {auth?.data?.lastname}</span>
                    </VBoxPanel>
                    <Dropout className={`${css.last}`}
                             side={0}
                             onSelect={handleAccountSwitch}
                             options={[
                                ...(accounts.filter(a => a.credentials?.username !== auth?.credentials?.username).map((a, i) => 
                                    <SmallUserItem avatar={a.data?.avatar}
                                                   username={a.credentials?.username}
                                                   name={a.data?.name}
                                                   key={i}/>
                                )),
                                <HBoxPanel className={css.addAccountButton}
                                           gap='10px'
                                           valign='center'>
                                    <img src={addUserIcon} alt="" className={`icon-s`}/>
                                    <span>Добавить</span>
                                </HBoxPanel>
                             ]}>
                        <RoundImageButton image={switchIcon} className={`icon-l ${css.ib}`}/>
                    </Dropout>
                    <RoundImageButton image={logoutIcon} className={`icon-l ${css.ib}`} onClick={handleLogout}/>
                </HBoxPanel>
                <HDivider/>
            </VBoxPanel>
        </Sidebar>
    );
}