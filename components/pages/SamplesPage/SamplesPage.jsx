import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';
import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff, HomeFilled, SettingsHorizontal, SettingsVertical, SettingsOutline, LogoutThick, SettingsSharp, SettingsSolid, SettingsFilled, Settings, ExperimentOutlined, Add, Bin, Remove, RefreshOutline, Edit, Pencil, PaperPlane, Palette, Package, Pin, Phone, Pizza, Party, Parking, PizzaFilled } from '../../dummies/Icons';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';
import { CopyFrame } from '../../widgets/CopyFrame/CopyFrame';
import { MarkdownRenderer } from '../../dummies/styleless/MarkdownRenderer';

export const SamplesPage = () => {
    const icons = [
        { element: <Moon />, jsx: "<Moon />" },
        { element: <Sun />, jsx: "<Sun />" },
        { element: <User />, jsx: "<User />" },
        { element: <UserFilled />, jsx: "<UserFilled />" },
        { element: <UserAdd />, jsx: "<UserAdd />" },
        { element: <Home />, jsx: "<Home />" },
        { element: <HomeFilled />, jsx: "<HomeFilled />" },
        { element: <Code />, jsx: "<Code />" },
        { element: <Swap />, jsx: "<Swap />" },
        { element: <Close />, jsx: "<Close />" },
        { element: <Logout />, jsx: "<Logout />" },
        { element: <LogoutThick />, jsx: "<LogoutThick />" },
        { element: <Email />, jsx: "<Email />" },
        { element: <Visibility />, jsx: "<Visibility />" },
        { element: <VisibilityOff />, jsx: "<VisibilityOff />" },
        { element: <SettingsHorizontal />, jsx: "<SettingsHorizontal />" },
        { element: <SettingsVertical />, jsx: "<SettingsVertical />" },
        { element: <SettingsOutline />, jsx: "<SettingsOutline />" },
        { element: <SettingsSolid />, jsx: "<SettingsSolid />" },
        { element: <SettingsSharp />, jsx: "<SettingsSharp />" },
        { element: <Settings />, jsx: "<Settings />" },
        { element: <SettingsFilled />, jsx: "<SettingsFilled />" },
        { element: <ExperimentOutlined />, jsx: "<ExperimentOutlined />" },
        { element: <Add />, jsx: "<Add />" },
        { element: <Remove />, jsx: "<Remove />" },
        { element: <Bin />, jsx: "<Bin />" },
        { element: <RefreshOutline />, jsx: "<RefreshOutline />" },
        { element: <Edit />, jsx: "<Edit />" },
        { element: <Pencil />, jsx: "<Pencil />" },
        { element: <PaperPlane />, jsx: "<PaperPlane />" },
        { element: <Palette />, jsx: "<Palette />" },
        { element: <Package />, jsx: "<Package />" },
        { element: <Pin />, jsx: "<Pin />" },
        { element: <Phone />, jsx: "<Phone />" },
        { element: <Pizza />, jsx: "<Pizza />" },
        { element: <PizzaFilled />, jsx: "<PizzaFilled />" },
        { element: <Party />, jsx: "<Party />" },
        { element: <Parking />, jsx: "<Parking />" },
    ];

    return (
        <BasePage headerContent={<HeaderTitle text='ENVELOPE' icon={<Pizza/>}/>}
                  bodyClassName={`h-full`}
                  footerContent={<DSTUFooter/>}
                  navSidebar={<DSTUNavSidebar/>}>
                    
            <h1 className='article'>Иконки</h1>

            <MarkdownRenderer>{`

\`\`\`js
    console.log(a)
\`\`\`
            `}</MarkdownRenderer>

            <FlowPanel className={``}>
                {icons.map((icon, id) => (
                    <CopyFrame key={id} src={icon.jsx}>{icon.element}</CopyFrame>
                ))}
            </FlowPanel>
        </BasePage>
    );
};
