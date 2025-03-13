import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import BasePage from '../BasePage/BasePage';
import css from './UserSettingsPage.module.css';

export const UserSettingsPage = () => {
    return (
        <BasePage headerContent={`Настройки профиля`}
                  navSidebar={<DSTUNavSidebar/>}>
            
        </BasePage>
    );
};