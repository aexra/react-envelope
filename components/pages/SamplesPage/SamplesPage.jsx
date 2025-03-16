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
                  navSidebar={<DSTUNavSidebar/>}
                  bodyGap='10px'>
            
            <h1 className='article'>Здравствуйте!</h1>

            <MarkdownRenderer>{`
Данная страница призвана обеспечить пользователя всей доступной информацией по библиотеке \`react-envelope\`.

Здесь вы найдете:
- Принятые соглашения о реализации
- Иконки
- Компоненты
- Хуки
- Рутинг
- Тосты
- Глобальные стили
            `}</MarkdownRenderer>

            <h1 className='article'>Соглашения</h1>

            <MarkdownRenderer>{`
## Структура проекта

Это дефолтный проект реакта, но с гитхабным подмодулем [react-envelope](https://github.com/aexra/react-envelope), посему фактически проект состоит из двух частей:
1. Стандартный проект реакта, в котором **можно** мутить все что вздумается.
2. Папка \`/src/react-envelope/\` - подмодуль, в котором мутить что-то не желательно - это и есть база на которой все будет писаться.

В идеале структура проекта выглядит так:
- frontend
  - public (не рассматриваем)
  - src
    - react-envelope
      - api
      - assets
      - components
        - ...
      - contexts
      - hooks
      - interfaces
      - utils
      - styles.css
      - variables.css
    - components
      - ...
    - все остальное по шаблону реакта

## Компоненты

Все компоненты будут находиться в директории \`src/react-envelope/components\`, если это компоненты библиотеки, и \`/src/components\`, если это компоненты одного конкретного проекта.

### Категории компонентов

Все компоненты вы разбиваете на следующие категории (и каталоги в \`/components\`, соответственно) по их иерархии использования (каждый компонент может использовать компоненты только ниже себя по категории):
1. **pages** - страницы, верхний уровень, они размеющаются в рутинге (см. ниже)
2. **widgets** - компоненты с бизнес-логикой, могут вызывать апи, иметь сложные принципы работы и т.д. и т.п.
3. **dummies** - "карточки" - куски интерфейса, которые просто что-то показывают (например, карточка товара)
4. **ui** - минимальные части интерфейса - кнопки, поля ввода, разделители и пр.

Вне иерархии:
- **layouts** - менеджеры расположения компонентов
- **wrappers** - обертки компонентов ( я бы это назвал энвелоупы ) - что-то, что стилизует и расставляет своих детей, и возможно имеет какую-то логику

### Написание

Каждый стилизованный компонент будет иметь свою собственную папку и разбит на JS/TS и CSS, например:
- components
  - dummies
    - MyComponent.jsx
    - MyComponent.module.css

Примите во внимание, что стили, которые будет брать напрямую из css, мы называем camelCase без дефисов, т.к. иначе его не схавает реакт и вообще js, ща поймете о чем я.

Примем за написание компонентов структуру следующего вида:

#### CSS

\`\`\`css
.myComponent {
    ...
}
\`\`\`

> [!WARNING]
> Если стилизуем цвета, если возможно, желательно использовать цвета глобальной палитры (см. ниже)

#### JSX (JavaScript React)

\`\`\`jsx
import css from './MyComponent.module.css';

export const MyComponent = ({ className, children, ... }) => {
    return (
        <div className = \`\${className} \${css.myComponent}\`>
            {children}
        </div>
    );  
};
\`\`\`

#### TSX (TypeScript React)
            `}</MarkdownRenderer>

            <h1 className='article'>Иконки</h1>

            <div>
                <MarkdownRenderer>{`
Библиотека компонентов (и не только) \`react-envelope\` предоставляет возможность использовать прямо в разметке иконки из файла \`/react-envelope/components/dummies/Icons.jsx\` следующим образом:
\`\`\`jsx
// Например, иконка Home
import { Home } from '../../dummies/Icons'; // Примерное расположение

// Ваш компонент
export const MyComponent = ({ ... }) => {
    return (
        <Home/>
    );    
}
\`\`\`
Результатом на экране будет это:
            `}</MarkdownRenderer>
                <Home/>
                <MarkdownRenderer>{`
Вы также можете изменять размер иконки заготовленными классами:
\`\`\`jsx
<Home className='icon-s'/>
\`\`\`
Доступные классы можно найти в \`/react-envelope/styles.css\`, вот некоторые из них:
\`\`\`jsx
<FlowPanel gap='10px'>
    <Home className='icon-s'/>
    <Home className='icon-m'/>
    <Home className='icon-l'/>
    <Home className='icon-g'/>
<FlowPanel/>
\`\`\`
                `}</MarkdownRenderer>
            <FlowPanel gap='10px'>
                <Home className='icon-s'/>
                <Home className='icon-m'/>
                <Home className='icon-l'/>
                <Home className='icon-g'/>
            </FlowPanel>
            <MarkdownRenderer>{`
Ниже представлены все доступные иконки (можно добавлять свои по аналогии).
Вы можете нажать на иконку для копирования разметки.
            `}</MarkdownRenderer>
            </div>

            <FlowPanel className={``}>
                {icons.map((icon, id) => (
                    <CopyFrame key={id} src={icon.jsx}>{icon.element}</CopyFrame>
                ))}
            </FlowPanel>
        </BasePage>
    );
};
