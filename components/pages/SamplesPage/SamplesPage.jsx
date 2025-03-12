import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';
import { Close, Code, Email, Home, Logout, Moon, Sun, Swap, User, UserAdd } from '../../dummies/Icons';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import HDivider from '../../ui/dividers/HDivider/HDivider';

export const SamplesPage = () => {
    const setHeaderContent = () => {
        return (
            <span className={`${css.title}`}>ENVELOPE</span>
        );
    };

    return (
        <BasePage headerContent={setHeaderContent()}
                  footerContent={<DSTUFooter/>}
                  bodyClassName={`fullh`}>
            <h1>Иконки</h1>
            <FlowPanel className={``}>
                <Moon/>
                <Sun/>
                <User/>
                <UserAdd/>
                <Home/>
                <Code/>
                <Swap/>
                <Close/>
                <Logout/>
                <Email/>
            </FlowPanel>
            <HDivider className={`stretch-self`}/>
        </BasePage>
    );
};
