import { UserGeneralPanel } from '../../../widgets/user/UserGeneralPanel/UserGeneralPanel';
import { IconHeader } from '../../base/IconHeader';
import { IconTitle } from '../../base/IconTitle';
import { PageBase } from '../../base/PageBase/PageBase';
import { ThemeAuthEndtitle } from '../../base/ThemeAuthEndtitle';
import css from './DocsPage.module.css';

export const DocsPage = () => {
    return (
        <PageBase title={<IconTitle/>}
                  endtitle={<ThemeAuthEndtitle/>}
                  header={<IconHeader/>}>
            <UserGeneralPanel edit/>
            <UserGeneralPanel edit/>
            <UserGeneralPanel edit/>
            <UserGeneralPanel edit/>
            <UserGeneralPanel edit/>
        </PageBase>
    );
};