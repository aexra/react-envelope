import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { User } from "../../dummies/Icons";
import HBoxPanel from "../../layouts/HBoxPanel/HBoxPanel";
import ExButton from "../../ui/buttons/ExButton/ExButton";
import { ProfileSidebar } from "../../widgets/ProfileSidebar/ProfileSidebar";
import css from './base.module.css';
import { useNavigate } from "react-router-dom";

export const SelfUserConfItem = ({
    className
}) => {
    const { auth, user } = useAuth();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {user ? 
            <div className={`flex row center g20 ${className}`}>
                <HBoxPanel gap={'5px'} valign="center" className={`${css.h960}`}>
                    <span>{user?.lastname}</span>
                    <span>{user?.firstname}</span>
                    {user?.middlename && <span>{user?.middlename}</span>}
                </HBoxPanel>
                <User className={`icon-m pointer ${css.userIcon}`}
                        onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}
                        color='#fff'/>
            </div> :
            <ExButton className={`textbutton ${className} ${css.login}`} onClick={() => navigate('/login')}>Войти</ExButton>}
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </>
    );
};