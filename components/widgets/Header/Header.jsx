import { useNavigate } from 'react-router-dom';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import css from './Header.module.css';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import person from '../../../assets/images/user.png';
import { useState } from 'react';
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar';
import { useAuth } from '../../../hooks/useAuth';
import { useTheme } from '../../../hooks/useTheme';
import light from '../../../assets/vectors/theme-light.svg';
import dark from '../../../assets/vectors/theme-dark.svg';

function Header({ ref, className, style }) {
    const navigate = useNavigate();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const { auth } = useAuth();
    const { theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${css.header}`}
                   style={style}
                   valign='center'
                   gap='10px'>
            <img src={theme === 'light' ? light : dark} 
                 className={`${theme === 'light' ? 'icon-m' : 'icon-s'} hlast br-round ${css.toggleTheme}`}
                 onClick={handleThemeToggle}/>
            {!auth ? <TagButton className={`${css.loginButton} ${css.last}`}
                       onClick={() => navigate('/login')}>Войти</TagButton> :
                       <RoundImageButton className={`icon-s`}
                                         image={person}
                                         onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}/>}
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </HBoxPanel>
    );
}

export default Header;