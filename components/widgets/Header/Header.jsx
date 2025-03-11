import { useNavigate } from 'react-router-dom';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import css from './Header.module.css';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import person from '../../../assets/images/user.png';
import { useState } from 'react';
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar';
import { useAuth } from '../../../hooks/useAuth';

function Header({ ref, className, style }) {
    const navigate = useNavigate();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const { auth, accounts, login, logout, logoutAuth, switchAuth } = useAuth();
    
    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${css.header}`}
                   style={style}
                   valign='center'>
            {!auth ? <TagButton className={`${css.loginButton} ${css.last}`}
                       onClick={() => navigate('/login')}>Войти</TagButton> :
                       <RoundImageButton className={`${css.last} icon-s`}
                                         image={person}
                                         onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}/>}
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </HBoxPanel>
    );
}

export default Header;