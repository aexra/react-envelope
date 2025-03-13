import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';
import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff } from '../../dummies/Icons';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';

export const SamplesPage = () => {
    const setHeaderContent = () => {
        return (
            <span className={`${css.title}`}>ENVELOPE</span>
        );
    };

    return (
        <BasePage headerContent={setHeaderContent()}
                  bodyClassName={`h-full`}
                  footerContent={<DSTUFooter/>}
                  navSidebar={<DSTUNavSidebar/>}>
            <h1>Иконки</h1>
            <FlowPanel className={``}>
                <Moon/>
                <Sun/>
                <User/>
                <UserFilled/>
                <UserAdd/>
                <Home/>
                <Code/>
                <Swap/>
                <Close/>
                <Logout/>
                <Email/>
                <Visibility/>
                <VisibilityOff/>
            </FlowPanel>
            <HDivider className={`stretch-self`}/>
        </BasePage>
    );
};
