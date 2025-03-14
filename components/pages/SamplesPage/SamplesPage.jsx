import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';
import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff, HomeFilled, SettingsHorizontal, SettingsVertical, SettingsOutline, LogoutThick, SettingsSharp, SettingsSolid, SettingsFilled, Settings, ExperimentOutlined, Add, Bin, Remove, RefreshOutline, Edit, Pencil, PaperPlane, Palette, Package, Pin, Phone, Pizza, Party, Parking, PizzaFilled } from '../../dummies/Icons';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';
import { CopyFrame } from '../../widgets/CopyFrame/CopyFrame';

export const SamplesPage = () => {
    return (
        <BasePage headerContent={<HeaderTitle text='ENVELOPE' icon={<Pizza/>}/>}
                  bodyClassName={`h-full`}
                  footerContent={<DSTUFooter/>}
                  navSidebar={<DSTUNavSidebar/>}>
            <h1>Иконки</h1>
            <FlowPanel className={``}>
                <CopyFrame src={<Moon/>}><Moon/></CopyFrame>
                <Sun/>
                <User/>
                <UserFilled/>
                <UserAdd/>
                <Home/>
                <HomeFilled/>
                <Code/>
                <Swap/>
                <Close/>
                <Logout/>
                <LogoutThick/>
                <Email/>
                <Visibility/>
                <VisibilityOff/>
                <SettingsHorizontal/>
                <SettingsVertical/>
                <SettingsOutline/>
                <SettingsSolid/>
                <SettingsSharp/>
                <Settings/>
                <SettingsFilled/>
                <ExperimentOutlined/>
                <Add/>
                <Remove/>
                <Bin/>
                <RefreshOutline/>
                <Edit/>
                <Pencil/>
                <PaperPlane/>
                <Palette/>
                <Package/>
                <Pin/>
                <Phone/>
                <Pizza/>
                <PizzaFilled/>
                <Party/>
                <Parking/>
            </FlowPanel>
            <HDivider className={`stretch-self`}/>
        </BasePage>
    );
};
