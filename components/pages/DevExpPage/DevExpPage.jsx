import { Code } from '../../dummies/Icons';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import BasePage from '../BasePage/BasePage';
import css from './DevExpPage.module.css';

export const DevExpPage = () => {
    return (
        <BasePage navSidebar={<DSTUNavSidebar/>}
                  headerContent={<HeaderTitle text='Экспериментальная' icon={<Code/>}/>}>

        </BasePage>
    );
};