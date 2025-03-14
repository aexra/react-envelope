import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import BasePage from '../BasePage/BasePage';
import css from './UserSettingsPage.module.css';
import { UserGeneralPanel } from '../../widgets/user/UserGeneralPanel/UserGeneralPanel';

export const UserSettingsPage = () => {
    return (
        <BasePage headerContent={<span>Настройки профиля</span>}
                  navSidebar={<DSTUNavSidebar/>}
                  bodyClassName={`h-full`}>
            <h1>Основная информация</h1>
            <UserGeneralPanel/>
        </BasePage>
    );
};