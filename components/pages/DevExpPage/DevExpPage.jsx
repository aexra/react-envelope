import { Code } from '../../dummies/Icons';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';
import { Switch } from '../../ui/selectors/Switch/Switch';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import { AuthCard } from '../../widgets/user/AuthCard/AuthCard';
import { PageBase } from '../base/PageBase/PageBase';
import BasePage from '../BasePage/BasePage';
import css from './DevExpPage.module.css';

export const DevExpPage = () => {
    return (
        <PageBase>
            <AuthCard/>
        </PageBase>
    );
};