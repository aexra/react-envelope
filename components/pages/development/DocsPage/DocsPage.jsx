import { UserGeneralPanel } from '../../../widgets/user/UserGeneralPanel/UserGeneralPanel';
import { PageBase } from '../../base/PageBase/PageBase';
import css from './DocsPage.module.css';

export const DocsPage = () => {
    return (
        <PageBase title={<span>Тайтл</span>}
                  endtitle={<span>Ендтайтл</span>}
                  header={<span>Хедер</span>}>
            <UserGeneralPanel/>
            <UserGeneralPanel/>
            <UserGeneralPanel/>
            <UserGeneralPanel/>
            <UserGeneralPanel/>
        </PageBase>
    );
};