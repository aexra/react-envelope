import css from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useTheme } from '../../../hooks/useTheme';
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar';
import { Moon, Sun, User } from '../../dummies/Icons';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import VDivider from '../../ui/dividers/VDivider/VDivider';

function Header({ ref, className, style, children }) {
    const navigate = useNavigate();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const { auth, user } = useAuth();
    const { isLight, theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${css.header}`}
                   style={style}
                   valign='center'
                   gap='20px'>
            {children}
            <div onClick={handleThemeToggle} className={`h-last br-round pointer flex center-v`}>
                {isLight ? <Sun className='icon-m pointer' color='#fff'/> : <Moon className='icon-m pointer' color='#fff'/>}
            </div>
            {!auth ? <ExButton className={`textbutton-less color-light`}
                               onClick={() => navigate('/login')}>Войти</ExButton> :
                <HBoxPanel valign='center' gap='5px'>
                    <span>{user?.lastname}</span>
                    <span>{user?.firstname}</span>
                    {user?.middlename && <span className='white'>{user?.middlename}</span>}
                    <User className={`icon-m pointer`}
                          onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}
                          color='#fff'/>
                </HBoxPanel>            
            }
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </HBoxPanel>
    );
}

export default Header;