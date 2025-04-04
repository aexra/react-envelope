import css from './UserSettingsPage.module.css';
import { UserGeneralPanel } from '../../widgets/user/UserGeneralPanel/UserGeneralPanel';
import { PageBase } from '../base/PageBase/PageBase';
import { IconHeader } from '../base/IconHeader';
import { Settings } from '../../dummies/Icons';

export const UserSettingsPage = () => {
    return (
        <PageBase header={<IconHeader text={'Настройки'} icon={<Settings/>}/>}>
            <h1>Основная информация</h1>
            <UserGeneralPanel edit/>
        </PageBase>
    );
};