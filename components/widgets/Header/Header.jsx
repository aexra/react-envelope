import css from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useTheme } from '../../../hooks/useTheme';
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import { Moon, Sun, User } from '../../dummies/Icons';

function Header({ ref, className, style, children }) {
    const navigate = useNavigate();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const { auth } = useAuth();
    const { isLight, theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${css.header}`}
                   style={style}
                   valign='center'
                   gap='10px'>
            {children}
            <div onClick={handleThemeToggle} className={`h-last br-round pointer flex center-v`}>
                {isLight ? <Sun className='icon-m pointer'/> : <Moon className='icon-m pointer'/>}
            </div>
            {!auth ? <TagButton className={`textbutton h-last`}
                       onClick={() => navigate('/login')}>Войти</TagButton> :
                        <User className={`icon-m pointer`}
                              onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}/>}
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </HBoxPanel>
    );
}

export default Header;