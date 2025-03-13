import { useState } from 'react';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import BasePage from '../BasePage/BasePage';
import css from './UserSettingsPage.module.css';
import { EditSelfModal } from '../../widgets/modals/EditSelfModal/EditSelfModal';
import ExButton from '../../ui/buttons/ExButton/ExButton';

export const UserSettingsPage = () => {
    const [isEditUserModalActive, setIEUMA] = useState(false);
    
    return (
        <BasePage headerContent={`Настройки профиля`}
                  navSidebar={<DSTUNavSidebar/>}
                  bodyClassName={`h-full`}>
            <h1>Основная информация</h1>
            <ExButton className={`dstu-accent-button start-self`}
                      onClick={() => setIEUMA(!isEditUserModalActive)}>Настройка пользователя</ExButton>
            
            <EditSelfModal isEnabled={isEditUserModalActive}
                           onCloseRequested={() => setIEUMA(false)}/>
        </BasePage>
    );
};