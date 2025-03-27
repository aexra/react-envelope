import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff, HomeFilled, SettingsHorizontal, SettingsVertical, SettingsOutline, LogoutThick, SettingsSharp, SettingsSolid, SettingsFilled, Settings, ExperimentOutlined, Add, Bin, Remove, RefreshOutline, Edit, Pencil, PaperPlane, Palette, Package, Pin, Phone, Pizza, Party, Parking, PizzaFilled, ExpandMore, Info, Success, Warning, Exclamation, Tip, Error, Bug, Save, Reload } from '../../../dummies/Icons';
import FlowPanel from '../../../layouts/FlowPanel/FlowPanel';
import { Headline } from '../../../ui/labels/Headline/Headline';
import { CopyFrame } from '../../../widgets/CopyFrame/CopyFrame';
import { CodeBlock, Markdown } from '../../../widgets/Markdown';
import { UserGeneralPanel } from '../../../widgets/user/UserGeneralPanel/UserGeneralPanel';
import { IconHeader } from '../../base/IconHeader';
import { IconTitle } from '../../base/IconTitle';
import { PageBase } from '../../base/PageBase/PageBase';
import { ThemeAuthEndtitle } from '../../base/ThemeAuthEndtitle';
import css from './DocsPage.module.css';

export const DocsPage = () => {
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
        { element: <ExpandMore />, jsx: "<ExpandMore />" },
        { element: <Info />, jsx: "<Info />" },
        { element: <Success />, jsx: "<Success />" },
        { element: <Warning />, jsx: "<Warning />" },
        { element: <Error />, jsx: "<Error />" },
        { element: <Exclamation />, jsx: "<Exclamation />" },
        { element: <Tip />, jsx: "<Tip />" },
        { element: <Bug />, jsx: "<Bug />" },
        { element: <Save />, jsx: "<Save />" },
        { element: <Reload />, jsx: "<Reload />" }
    ];
    
    return (
        <PageBase title={<IconTitle/>}
                  endtitle={<ThemeAuthEndtitle/>}
                  header={<IconHeader/>}>

    <Headline>Иконки</Headline>

    <Markdown>{`
Библиотека компонентов (и не только) \`react-envelope\` предоставляет возможность использовать прямо в разметке иконки из файла \`/react-envelope/components/dummies/Icons.jsx\` следующим образом:
`}</Markdown>

<CodeBlock lang={'jsx'}>{
`// Например, иконка Home
import { Home } from '../../dummies/Icons'; // Примерное расположение

// Ваш компонент
export const MyComponent = ({ ... }) => {
return (
<Home/>
);    
}`}</CodeBlock>

<Markdown>{`
Результатом на экране будет это:
`}</Markdown>
    <Home/>
    <Markdown>{`
Вы также можете изменять размер иконки заготовленными классами:
`}</Markdown>

<CodeBlock lang={'css'}>{
`<Home className='icon-s'/>`}</CodeBlock>

<Markdown>{`
Доступные классы можно найти в \`/react-envelope/styles.css\`, вот некоторые из них:
`}</Markdown>

<CodeBlock lang={'css'}>{
`<FlowPanel gap='10px'>
<Home className='icon-s'/>
<Home className='icon-m'/>
<Home className='icon-l'/>
<Home className='icon-g'/>
<FlowPanel/>`}</CodeBlock>

<FlowPanel gap='10px'>
    <Home className='icon-s'/>
    <Home className='icon-m'/>
    <Home className='icon-l'/>
    <Home className='icon-g'/>
</FlowPanel>
<Markdown>{`
Ниже представлены все доступные иконки (можно добавлять свои по аналогии).
Вы можете нажать на иконку для копирования разметки.
`}</Markdown>

<FlowPanel className={``}>
    {icons.map((icon, id) => (
        <CopyFrame key={id} src={icon.jsx}>{icon.element}</CopyFrame>
    ))}
</FlowPanel>
        </PageBase>
    );
};