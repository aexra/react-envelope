import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { User } from "../../dummies/Icons";
import HBoxPanel from "../../layouts/HBoxPanel/HBoxPanel";
import ExButton from "../../ui/buttons/ExButton/ExButton";
import { ProfileSidebar } from "../../widgets/ProfileSidebar/ProfileSidebar";
import css from './base.module.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

export const SelfUserConfItem = ({
    className
}) => {
    const { auth, user } = useAuth();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            {user ?
                <div className={`flex row center g20 ${className}`}>
                    <HBoxPanel gap={'5px'} valign="center" className={`${css.h960}`}>
                        <span>{user?.lastname}</span>
                        <span>{user?.firstname}</span>
                        {user?.middlename && <span>{user?.middlename}</span>}
                    </HBoxPanel>
                    <Avatar className={'icon-l r100 pointer'} onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}/>
                </div> :
                <ExButton className={`textbutton ${className} ${css.login}`} onClick={() => navigate('/user/auth', { state: { from: location.pathname } })}>Войти</ExButton>}
            <ProfileSidebar active={isProfileSidebarShown}
                onMinimized={() => setProfileSidebarVisibility(false)} />
        </>
    );
};