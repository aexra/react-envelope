import css from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useTheme } from '../../../hooks/useTheme';
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar';
import { Moon, Sun, User } from '../../dummies/Icons';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import ExButton from '../../ui/buttons/ExButton/ExButton';

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
                {isLight ? <Sun className='icon-m pointer' color='#fff'/> : <Moon className='icon-m pointer' color='#fff'/>}
            </div>
            {!auth ? <ExButton className={`textbutton-less color-light`}
                               onClick={() => navigate('/login')}>Войти</ExButton> :
                        <User className={`icon-m pointer`}
                              onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}
                              color='#fff'/>}
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </HBoxPanel>
    );
}

export default Header;