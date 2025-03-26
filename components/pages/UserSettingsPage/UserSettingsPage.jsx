import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import BasePage from '../BasePage/BasePage';
import css from './UserSettingsPage.module.css';
import { UserGeneralPanel } from '../../widgets/user/UserGeneralPanel/UserGeneralPanel';
import { Settings } from '../../dummies/Icons';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';

export const UserSettingsPage = () => {
    return (
        <BasePage headerContent={<HeaderTitle text='Настройки профиля' icon={<Settings/>}/>}
                  navSidebar={<DSTUNavSidebar/>}>
            <h1>Основная информация</h1>
            <UserGeneralPanel/>
        </BasePage>
    );
};