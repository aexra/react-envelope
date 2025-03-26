import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { User } from "../../dummies/Icons";
import HBoxPanel from "../../layouts/HBoxPanel/HBoxPanel";
import ExButton from "../../ui/buttons/ExButton/ExButton";
import { ProfileSidebar } from "../../widgets/ProfileSidebar/ProfileSidebar";

export const SelfUserConfItem = ({
    className
}) => {
    const { auth, user } = useAuth();
    const [isProfileSidebarShown, setProfileSidebarVisibility] = useState(false);

    return (
        <>
            {user ? 
            <div className={`flex row center g20 ${className}`}>
                <HBoxPanel gap={'5px'} valign="center">
                    <span>{user?.lastname}</span>
                    <span>{user?.firstname}</span>
                </HBoxPanel>
                <User className={`icon-m pointer`}
                        onClick={() => setProfileSidebarVisibility(!isProfileSidebarShown)}
                        color='#fff'/>
            </div> :
            <ExButton className={`textbutton ${className}`}>Войти</ExButton>}
            <ProfileSidebar active={isProfileSidebarShown}
                            onMinimized={() => setProfileSidebarVisibility(false)}/>
        </>
    );
};