import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff, HomeFilled, SettingsHorizontal, SettingsVertical, SettingsOutline, LogoutThick, SettingsSharp, SettingsSolid, SettingsFilled, Settings, ExperimentOutlined, Add, Bin, Remove, RefreshOutline, Edit, Pencil, PaperPlane, Palette, Package, Pin, Phone, Pizza, Party, Parking, PizzaFilled, ExpandMore, Info, Success, Warning, Exclamation, Tip, Error, Bug, Save, Reload, Menu, MenuAlt } from '../../../dummies/Icons';
import FlowPanel from '../../../layouts/FlowPanel/FlowPanel';
import { Headline } from '../../../ui/labels/Headline/Headline';
import { CopyFrame } from '../../../widgets/CopyFrame/CopyFrame';
import { CodeBlock, Markdown } from '../../../widgets/Markdown';
import { UserGeneralPanel } from '../../../widgets/user/UserGeneralPanel/UserGeneralPanel';
import { Footer } from '../../base/Footer/Footer';
import { IconHeader } from '../../base/IconHeader';
import { IconTitle } from '../../base/IconTitle';
import { PageBase } from '../../base/PageBase/PageBase';
import { ThemeAuthEndtitle } from '../../base/ThemeAuthEndtitle';
import css from './DocsPage.module.css';

export const DocsPage = () => {
    return (
        <PageBase footer={<Footer routes={[{
            name: 'OLD ENVELOPE DOCS',
            to: '/_lab/old'
        }]}/>} less>

            <Headline>ENVELOPE PAGE 2.0</Headline>

            <p>Обновление добавляет ряд новых компонентов и способов взаимодействия с ними.
                В первую очередь, оно полностью перерабытвает подход к написанию страниц.</p>

            <h2>Основное применение</h2>

            Классический способ создать новую страницу такого формата выглядит следующим образом.

            <CodeBlock lang='jsx'>{`// Здесь "..." обозначает смотря где вы находитесь
import { PageBase } from '.../base/PageBase/PageBase';

export const MyPage = () => {
    return (
        <PageBase>
            Ваш контент
        </PageBase>
    );
}`}</CodeBlock>

            <p>Таким образом, все что изменится от того, что вы сейчас видите - это контент страницы (та часть страницы где вы это читаете). Все остальное <u>по умолчанию</u> шаблонное.</p>
    
            <p>Полный перечень параметров, передываемых новой странице:</p>

            <CodeBlock lang='jsx'>{`export const PageBase = ({
    title = <IconTitle/>,
    header = <IconHeader/>,
    endtitle = <ThemeAuthEndtitle/>,
    footer = <Footer/>,
    navigation = <NavPanel/>,
    contents = <AutoTableOfContents/>,
    less = false, // пока не используется, предназначен для дефолтного сворачивания боковых панелей
    gap = '10px' // расстояние между каждым отдельным компонентом в контенте
    children,
}) => { ... }`}</CodeBlock>

            <Markdown>{`
Как вы могли заметить, некоторые поля имеют свои дефолтные значения. Что есть что?<br/>Формально эта страница поделена на 6 частей: 
- В хедере:
  - *title* - заголовок
  - *header* - пространство после него 
  - *endtitle* - конец хедера
- Под хедером:
  - *navigation* - панель с навигацией слева
  - *children* - собственно контент страницы
  - *contents* - список заголовков на странице для быстрого перехода - по дефолту полностью автоматический, как работает - если захотите разберетесь
            `}</Markdown>

            <p>А теперь о том, какие компоненты использованы на странице по дефолту.</p>

            <h3>IconTitle</h3>

            <CodeBlock lang='jsx'>{`export const IconTitle = ({
    className,
    text = 'ENVELOPE',
    icon = <Pizza/>
}) => { ... }`}</CodeBlock>

            <h3>IconHeader</h3>

            <p>Если явно не задан текст и иконка (оба сразу), будет использовано название и иконка текущей страницы (используется конфиг <i>useNavigation</i>, так что страница <b><u>должна</u></b> быть указана в конфиге в <i>Router</i>).</p>

            <CodeBlock lang='jsx'>{`export const IconHeader = ({
    className,
    text,
    icon
}) => { ... }`}</CodeBlock>

            <h3>ThemeAuthEndtitle</h3>

            <p>Ничего особенного, просто панелька с темой, юзером и юзерсайдбаром из страницы прошлого поколения.</p>

            <h3>Footer</h3>

            <p>Отображает список определенных навлинков.</p>

            <p><i>Footer</i> принимает следующие параметры:</p>

            <CodeBlock lang='jsx'>{`export const Footer = ({
    routes,                 // Руты интерфейса Route (как в useNavigation и Router)
    navLink = FooterNavLink // Обертка NavLink как в навигации (см. ниже)
}) => { ... }`}</CodeBlock>

            <h3>NavPanel</h3>

            <p>Собирает панель навигации из кнопок (по умолчанию <i>NavButton</i> - это композиция <i>NavLink</i> из `react-router-dom`) по конфигурации <i>useNavigation</i>.
            В теории можно свободно писать свою навигацию на основе <i>NavPanel</i>, только учесть, что ваша кнопка должна иметь такие поля:</p>

            <CodeBlock lang='jsx'>{`export const MyNavButton = ({
    className, // класс, применяемый к кнопке
    icon,      // иконка страницы
    name,      // имя страницы
    to         // адрес страницы
}) => { ... }`}</CodeBlock>

            <p>И тогда создание кастомной нав. панели:</p>

            <CodeBlock lang='jsx'>{`<NavPanel button={MyNavButton}/>`}</CodeBlock>

            <p>Или сразу в странице:</p>

            <CodeBlock lang='jsx'>{`export const MyPage = () => {
    return (
        <PageBase navigation=<NavPanel button={MyNavButton}/>>
            Ваш контент
        </PageBase>
    );
}`}</CodeBlock>

        </PageBase>
    );
};