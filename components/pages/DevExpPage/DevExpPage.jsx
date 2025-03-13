import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import BasePage from '../BasePage/BasePage';
import css from './DevExpPage.module.css';

export const DevExpPage = () => {
    return (
        <BasePage headered
                  navSidebar={<DSTUNavSidebar/>}>

        </BasePage>
    );
};