import { useNavigate } from 'react-router-dom';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import css from './Header.module.css';
import RoundImageButton from '../../ui/buttons/RoundImageButton/RoundImageButton';
import person from '../../../assets/images/user.png';
import { useContext, useState } from 'react';
import { ProfileSidebar } from '../ProfileSidebar/ProfileSidebar';

function Header({ ref, className, style }) {
    const navigate = useNavigate();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const { isAuth } = useContext(AuthContext);
    
    return (
        <HBoxPanel ref={ref}
                   className={`${className} ${css.header}`}
                   style={style}
                   valign='center'>
            {!isAuth ? <TagButton className={`${css.loginButton} ${css.last}`}
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