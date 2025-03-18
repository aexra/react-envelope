import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';
import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff, HomeFilled, SettingsHorizontal, SettingsVertical, SettingsOutline, LogoutThick, SettingsSharp, SettingsSolid, SettingsFilled, Settings, ExperimentOutlined, Add, Bin, Remove, RefreshOutline, Edit, Pencil, PaperPlane, Palette, Package, Pin, Phone, Pizza, Party, Parking, PizzaFilled, ExpandMore, Info, Success, Warning, Exclamation, Tip, Error, Bug } from '../../dummies/Icons';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';
import { CopyFrame } from '../../widgets/CopyFrame/CopyFrame';
import { Markdown } from '../../widgets/Markdown';
import { Headline } from '../../ui/labels/Headline/Headline';
import AccentButton from '../../ui/buttons/AccentButton/AccentButton';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import { Pair } from '../../layouts/Pair/Pair';
import { NavSidebarButton } from '../../ui/buttons/NavSidebarButton/NavSidebarButton';
import { StatusTag } from '../../ui/labels/StatusTag/StatusTag';
import ToggleButton from '../../ui/buttons/ToggleButton/ToggleButton';
import HDivider from '../../ui/dividers/HDivider/HDivider';
import VDivider from '../../ui/dividers/VDivider/VDivider';
import ExTextBox from '../../ui/input/ExTextBox/ExTextBox';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import { useRef, useState } from 'react';
import IconLabel from '../../ui/labels/IconLabel/IconLabel';
import userIcon from '../../../assets/images/user.png';
import { DimOverlay } from '../../ui/misc/DimOverlay/DimOverlay';
import { IconFilePicker } from '../../ui/input/IconFilePicker/IconFilePicker';
import { EditSelfModal } from '../../widgets/modals/EditSelfModal/EditSelfModal';
import { Expander } from '../../wrappers/Expander/Expander';
import { Callout } from '../../dummies/Callout/Callout';

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
        { element: <ExpandMore />, jsx: "<ExpandMore />" },
        { element: <Info />, jsx: "<Info />" },
        { element: <Success />, jsx: "<Success />" },
        { element: <Warning />, jsx: "<Warning />," },
        { element: <Error />, jsx: "<Error />" },
        { element: <Exclamation />, jsx: "<Exclamation />" },
        { element: <Tip />, jsx: "<Tip />" },
        { element: <Bug />, jsx: "<Bug />" },
    ];

    const sampleRef1 = useRef(null);
    const sampleRef2 = useRef(null);
    const sampleRef3 = useRef(null);
    const sampleRef4 = useRef(null);
    const sampleRef5 = useRef(null);
    const sampleRef6 = useRef(null);

    const [sampleState1, setSampleState1] = useState('');
    const [sampleState2, setSampleState2] = useState('');
    const [sampleState3, setSampleState3] = useState('');
    const [sampleState4, setSampleState4] = useState('');
    const [sampleState5, setSampleState5] = useState('');
    const [sampleState6, setSampleState6] = useState('');

    const [booleanState1, setBooleanState1] = useState(false);
    const [booleanState2, setBooleanState2] = useState(false);
    const [booleanState3, setBooleanState3] = useState(false);
    const [booleanState4, setBooleanState4] = useState(false);
    const [booleanState5, setBooleanState5] = useState(false);
    const [booleanState6, setBooleanState6] = useState(false);

    return (
        <BasePage headerContent={<HeaderTitle text='ENVELOPE' icon={<Pizza/>}/>}
                  bodyClassName={`h-full`}
                  footerContent={<DSTUFooter/>}
                  navSidebar={<DSTUNavSidebar/>}
                  bodyGap='10px'>
            
            <h1 className='article'>Здравствуйте!</h1>

            <Markdown>{`
Данная страница призвана обеспечить пользователя всей доступной информацией по библиотеке \`react-envelope\`.

Здесь вы найдете:
- Принятые соглашения о реализации
  - Структура проекта
  - Компоненты
    - Категории компонентов
    - Написание
      - CSS
      - JSX
      - TSX
- Иконки
- Компоненты
- Хуки
- Рутинг
- Тосты
- Глобальные стили
            `}</Markdown>

            <Headline>Соглашения</Headline>

            <Markdown>{`
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

Все компоненты будут находиться в директории \`/src/react-envelope/components\`, если это компоненты библиотеки, и \`/src/components\`, если это компоненты одного конкретного проекта.

### Категории компонентов

Все компоненты вы разбиваете на следующие категории (и каталоги в \`/components/\`, соответственно) по их иерархии использования (каждый компонент может использовать компоненты только ниже себя по категории):
1. **pages** - страницы, верхний уровень, они размеющаются в рутинге (см. рутинг)
2. **widgets** - компоненты с бизнес-логикой, могут вызывать апи, иметь сложные принципы работы и т.д. и т.п.
3. **dummies** - "карточки" - куски интерфейса, которые просто что-то показывают (например, карточка товара)
4. **ui** - минимальные части интерфейса - кнопки, поля ввода, разделители и пр.

Вне иерархии:
- **layouts** - менеджеры расположения компонентов
- **wrappers** - обертки компонентов ( эдакие энвелоупы ) - что-то, что стилизует и расставляет своих детей, и возможно имеет какую-то логику

По хорошему стараемся группировать все что группируется.\n
У вас есть несколько модалок которые относятся к юзеру?
- widgets
  - modals
    - user
      - Modalka1
        - ...jsx
        - ...css
      - Modalka2
        - ...jsx
        - ...css

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

> [!TIP]
> Если стилизуем цвета, если возможно, желательно использовать цвета глобальной палитры (см. глобальные стили)

#### JSX (JavaScript React)

\`\`\`jsx
import css from './MyComponent.module.css';

export const MyComponent = ({ className, children, ... }) => {
    return (
        <div className = \`\${className} \${css.myComponent} ...\`>
            {children}
        </div>
    );  
};
\`\`\`

#### TSX (TypeScript React)

\`\`\`tsx
import css from './MyComponent.module.css';

interface IMyComponentProps {
    className: string;
    children: React.ReactNode;
    ...
}

export const MyComponent: FC<IMyComponentProps> = ({ className, children, ... }) => {
    return (
        <div className = \`\${className} \${css.myComponent} ...\`>
            {children}
        </div>
    );  
};
\`\`\`
            `}</Markdown>

            <Headline>Иконки</Headline>

            <div>
                <Markdown>{`
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
            `}</Markdown>
                <Home/>
                <Markdown>{`
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
                `}</Markdown>
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
            </div>

            <FlowPanel className={``}>
                {icons.map((icon, id) => (
                    <CopyFrame key={id} src={icon.jsx}>{icon.element}</CopyFrame>
                ))}
            </FlowPanel>

            <div className='flex column h-stretch g10'>
                <Headline>Компоненты</Headline>

                <Markdown>{`
## UI

Нижняя категория - кнопочки и прочее

### Buttons

#### AccentButton
                `}</Markdown>

                <p>В принципе, это херня из прошлого, можете забить.</p>
                <AccentButton>Я AccentButton</AccentButton>

                <Pair left={<h4>ExButton</h4>}
                      right={<StatusTag text='ЭНВЕЛОУП' type='success' className='flex-0-1'/>}/>

                <p>Вот эта штука уже используется почти везде, построена на основе HBoxPanel и имеет ряд параметров</p>
                <HBoxPanel valign='center' gap='20px'>
                    {<ExButton className={css.buttonSample}>Я ExButton</ExButton>}
                    <Markdown className='flex-1'>{`
\`\`\`jsx
<ExButton>Я ExButton</ExButton>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel valign='center' gap='20px'>
                    {<ExButton leftIcon={<Pizza className='icon-m'/>} className={css.buttonSample}>Я ExButton с иконочкой через параметр</ExButton>}
                    <Markdown className='flex-1'>{`
\`\`\`jsx
<ExButton leftIcon={<Pizza className='icon-m'/>}>Я ExButton с иконочкой через параметр</ExButton>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel valign='center' gap='20px'>
                    {<ExButton gap='5px' className={css.buttonSample}><Pizza className='icon-m'/>Я ExButton с иконочкой через детей</ExButton>}
                    <Markdown className='flex-1'>{`
\`\`\`jsx
<ExButton gap='5px'><Pizza className='icon-m'/>Я ExButton с иконочкой через детей</ExButton>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel valign='center' gap='20px'>{
                    <ExButton leftIcon={<Pizza className='icon-m'/>}
                              rightIcon={<Pizza className='icon-m'/>} 
                              gap='5px'
                              className={css.buttonSample}>
                        <Pizza className='icon-m'/>
                        Пицца
                        <Pizza className='icon-m'/>
                    </ExButton>}
                    <Markdown className='flex-1'>{`
\`\`\`jsx
<ExButton leftIcon={<Pizza className='icon-m'/>}
          rightIcon={<Pizza className='icon-m'/>} 
          gap='5px'>
    <Pizza className='icon-m'/>
    Пицца
    <Pizza className='icon-m'/>
</ExButton>
\`\`\`

К слову, если вы далаете что-то такое же длинное, предпочтительно структурировать именно вот так, чтобы оно было хоть как-то читаемо.
                    `}</Markdown>
                </HBoxPanel>

                <h4>NavSidebarButton</h4>
                <p>Это кнопка из панели навигации слева</p>
                <Markdown>{`
\`\`\`jsx
<NavSidebarButton text={'На страницу с примерами'} icon={<Pizza/>} to={'/'}/>
\`\`\`
                `}</Markdown>
                <NavSidebarButton text={'На страницу с примерами'} icon={<Pizza/>} to={'/'}/>

                <Pair left={<h4>RoundImageButton</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

                <Pair left={<h4>TagButton</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

                <Pair left={<h4>ToggleButton</h4>}
                      right={<StatusTag text='Сомнительно' type='warning' className='flex-0-1'/>}/>

                <Markdown>{`
Только сейчас заметил, что работает криво с текстом, но сейчас он используется только как иконка, так шо пойдет
\`\`\`jsx
<ToggleButton text={'Я ToggleButton'}
              toggledText={'Я включенный ToggleButton'}
              toggled
              icon={<VisibilityOff/>}
              toggledIcon={<Visibility/>}/>
\`\`\`
                `}</Markdown>

                <ToggleButton text={'Я ToggleButton'}
                              toggledText={'Я включенный ToggleButton'}
                              toggled
                              icon={<VisibilityOff/>}
                              toggledIcon={<Visibility/>}/>

                <h3>Dividers</h3>

                Есть разделители вертикальные и горизонтальные:

                <HDivider/>
                <VDivider style={{height: '50px'}}/>

                <p>{`Это соответственно <HDivider/> и <VDivider/>`}</p>
                
                <h3>Input</h3>

                <Pair left={<h4>ExTextBox</h4>}
                      right={<StatusTag text='ЭНВЕЛОУП' type='success' className='flex-0-1'/>}/>

                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}/>
                    <Markdown className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}/>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               placeholder='Плейсхолдер'
                               icon={<Pizza/>}/>
                    <Markdown className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           placeholder='Плейсхолдер'
           icon={<Pizza/>}/>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               hint='Дио'
                               placeholder='А вот и нет, это я - Дио!'
                               icon={<User/>}/>
                    <Markdown className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           hint='Дио'
           placeholder='А вот и нет, это я - Дио!'
           icon={<User/>}/>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               hint={'Знаешь regex("ENVELOPE")?'}
                               placeholder='Не ENVELOPE'
                               inputRef={sampleRef1}
                               regex='ENVELOPE'/>
                    <Markdown className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           hint={'Знаешь regex("ENVELOPE")?'}
           placeholder='Не ENVELOPE'
           inputRef={sampleRef1}
           regex='ENVELOPE'/>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               readonly
                               borderless
                               text='Я только для чтения еще и без рамок'
                               hint='Теперь это просто текст с подсказкой'/>
                    <Markdown className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           readonly
           borderless
           text='Я только для чтения еще и без рамок'
           hint='Теперь это просто текст с подсказкой'/>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               password
                               hint='Пароль'
                               placeholder='Введите пароль'/>
                    <Markdown className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           password
           hint='Пароль'
           placeholder='Введите пароль'/>
\`\`\`
                    `}</Markdown>
                </HBoxPanel>

                <Pair left={<h4>TransparentTextBox</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

                <Pair left={<h4>IconFilePicker</h4>}
                      right={<StatusTag text='WORK IN PROGRESS' type='warning' className='flex-0-1'/>}/>

                <Markdown>{`
\`\`\`jsx
<IconFilePicker/>
\`\`\`
                `}</Markdown>

                <IconFilePicker className={'start-self'}/>

                <h3>Labels</h3>

                <p>Это просто всякие заголовки разной стилизации.</p>

                <h4>Headline</h4>
                <Headline>Я Headline</Headline>

                <Pair left={<h4>IconLabel</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

                <p>Это устаревший градиентный заголовок который сейчас используется только в форме авторизации/регистрации.</p>

                <p>l</p>

                <IconLabel text='IconLabel' src={userIcon}/>

                <Pair left={<h4>StatusTag</h4>}
                      right={<StatusTag text='ENVELOPE' type='success' className='flex-0-1'/>}/>

                <Markdown>{`
\`\`\`jsx
<StatusTag text='INFO' type='info'/>
<StatusTag text='SUCCESS' type='success'/>
<StatusTag text='WARNING' type='warning'/>
<StatusTag text='ERROR' type='error'/>

// Еще можно текст передавать в children
<StatusTag type='success'>Я РЕБЕНОК</StatusTag>
\`\`\`
                `}</Markdown>

                <div className='flex row g10'>
                    <StatusTag text='INFO' type='info'/>
                    <StatusTag text='SUCCESS' type='success'/>
                    <StatusTag text='WARNING' type='warning'/>
                    <StatusTag text='ERROR' type='error'/>
                    <StatusTag type='success'>Я РЕБЕНОК</StatusTag>
                </div>

                <h3>Miscellaneous</h3>

                <p>Тут.. ну.. всякое</p>

                <h4>DimOverlay</h4>

                <p>Эта штука позволяет затемнять экран (весь, в зависимости от переданного z-index)</p>

                <Markdown>{`
\`\`\`jsx
// Это где-то наверху
const [isDimActive, setDim] = useState(false);

// Это ну вы поняли где
<ExButton className={'accent-button'} onClick={() => setDim(true)}>Включить DimOverlay</ExButton>
<DimOverlay active={isDimActive} onClick={() => setDim(false)}/>
\`\`\`
                `}</Markdown>

                <ExButton className={'accent-button'} onClick={() => setBooleanState1(true)}>Включить DimOverlay</ExButton>
                <DimOverlay active={booleanState1} onClick={() => setBooleanState1(false)}/>

                <Markdown>{`
А вообще эта штука принимает вот такие аргументы:
\`\`\`jsx
{
    ref,
    className,
    dim = 0.5, // alpha-канал в rgba: [0, 1]
    active = false,
    z = 'var(--sidebar-dim-z)',
    pointerEvents = 'all', // события мыши при активном затемнении
    disabledPointerEvents = 'none', // события мыши при неактивном затемнении
    onMouseEnter,
    onMouseLeave,
    onClick,
}
\`\`\`

## Dummies

### Callout

\`\`\`jsx
<Callout>Информация</Callout>
<Callout type='success'>Успех</Callout>
<Callout type='warning'>Предупреждение</Callout>
<Callout type='error'>Ошибка</Callout>
<Callout type='bug'>Баг</Callout>
<Callout type='tip'>Совет</Callout>
\`\`\`
                `}</Markdown>

                <Callout>Информация</Callout>
                <Callout type='success'>Успех</Callout>
                <Callout type='warning'>Предупреждение</Callout>
                <Callout type='error'>Ошибка</Callout>
                <Callout type='bug'>Баг</Callout>
                <Callout type='tip'>Совет</Callout>

                <Markdown>{`
Вы также можете создавать вложенные колауты, модифицировать содержимое хедера и задавать значение раскрытости по умолчанию

\`\`\`jsx
<Callout icon={<Pizza/>} title='ENVELOPE' type='success' expanded>
    <p>Ниже будет вложенный колаут</p>
    <Callout type='info' expanded>Меня вложили (╯°□°）╯︵ ┻━┻</Callout>
</Callout>
\`\`\`
                `}</Markdown>

                <Callout icon={<Pizza/>} title='ENVELOPE' type='success' expanded>
                    <p>Ниже будет вложенный колаут</p>
                    <Callout type='info' expanded>Меня вложили (╯°□°）╯︵ ┻━┻</Callout>
                </Callout>

                <Markdown>{`

### HeaderTitle

Это просто обертка для автоматического сайзинга контента заголовка хедера страницы (вот наверху слева где ENVELOPE написано)

## Widgets
                `}</Markdown>
                
                <Pair left={<h3>Markdown</h3>}
                      right={<StatusTag text={'ENVELOPE'} type={'success'} className={'flex-0-1'}/>}/>

                <Markdown>{`
Именно в нем срендерена большая часть текста здесь

\`\`\`jsx
<Markdown>{\`
### Markdown

Именно в нем срендерена большая часть текста здесь

\\\`\\\`\\\`jsx
ENVELOPE
\\\`\\\`\\\`
\`}</Markdown>
\`\`\`

\`\`\`bash
sudo rm -rf /*
\`\`\`

А еще можно так:

\`\`\`latex
Рассмотрим сложное математическое выражение:

\$\$
\\int_{0}^{\\infty} \\frac{e^{-x^2} \\cdot \\sin(\\alpha x)}{x^2 + \\beta^2} \\, dx = \\frac{\\pi}{2} \\cdot \\frac{e^{-\\alpha \\beta}}{\\beta} \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n)!} \\left( \\frac{\\\alpha}{\\beta} \\right)^{2n}
\$\$

Также можно записать матрицу:

$$
\\mathbf{A} = \\begin{pmatrix}
a_{11} & a_{12} & \\cdots & a_{1n} \\\\
a_{21} & a_{22} & \\cdots & a_{2n} \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
a_{m1} & a_{m2} & \\cdots & a_{mn}
\\end{pmatrix}
$$

Или систему уравнений:

$$
\\begin{cases}
\\frac{\\partial u}{\\partial t} + \\nabla \\cdot (\\mathbf{v} u) = \\Delta u + f(x, t), \\\\
u(x, 0) = u_0(x), \\quad x \\in \\Omega, \\\\
u(x, t) = 0, \\quad x \\in \\partial \\Omega, \\ t > 0.
\\end{cases}
$$

А вот так оно не будет отцентровано:

$
(a+b)^2 = a^2 + 2ab + b^2
$
\`\`\`

Рассмотрим сложное математическое выражение:

$$
\\int_{0}^{\\infty} \\frac{e^{-x^2} \\cdot \\sin(\\alpha x)}{x^2 + \\beta^2} \\, dx = \\frac{\\pi}{2} \\cdot \\frac{e^{-\\alpha \\beta}}{\\beta} \\cdot \\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n)!} \\left( \\frac{\\\alpha}{\\beta} \\right)^{2n}
$$

Также можно записать матрицу:

$$
\\mathbf{A} = \\begin{pmatrix}
a_{11} & a_{12} & \\cdots & a_{1n} \\\\
a_{21} & a_{22} & \\cdots & a_{2n} \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
a_{m1} & a_{m2} & \\cdots & a_{mn}
\\end{pmatrix}
$$

Или систему уравнений:

$$
\\begin{cases}
\\frac{\\partial u}{\\partial t} + \\nabla \\cdot (\\mathbf{v} u) = \\Delta u + f(x, t), \\\\
u(x, 0) = u_0(x), \\quad x \\in \\Omega, \\\\
u(x, t) = 0, \\quad x \\in \\partial \\Omega, \\ t > 0.
\\end{cases}
$$

А вот так оно не будет отцентровано:

$
(a+b)^2 = a^2 + 2ab + b^2
$

### CopyFrame

Если вам надо чо-то скопировать юзеру в буфер обмена одним кликом (например как иконки выше)

\`\`\`jsx
<CopyFrame>Я CopyFrame без контента</CopyFrame>
<CopyFrame src={'ENVELOPE'}>Я CopyFrame с контентом</CopyFrame>
\`\`\`
                `}</Markdown>

                <CopyFrame className={'start-self'}>Я CopyFrame без контента</CopyFrame>
                <CopyFrame className={'start-self'} src={'ENVELOPE'}>Я CopyFrame с контентом</CopyFrame>

                <h3>LoginForm</h3>
                <p>Найдете на странице авторизации</p>

                <h3>RegisterForm</h3>
                <p>Найдете там же</p>

                <h3>Modals</h3>
                <p>Все модалки используют wrapper <b>Modal</b> (см. Wrappers)</p>

                <Pair left={<h4>EditSelfModal</h4>}
                      right={<StatusTag text={'ENVELOPE'} type={'success'} className={'flex-0-1'}/>}/>
                <Markdown>{`

                `}</Markdown>
                <ExButton className={'start-self accent-button'} onClick={() => setBooleanState2(true)}>Открыть модалку</ExButton>
                <EditSelfModal isEnabled={booleanState2} onCloseRequested={() => setBooleanState2(false)}/>

                <Markdown>{`
## Хуки

Следующие хуки разработаны для внутренней работы приложения и не предназначены для использования:
- useAccounts
- useUser

### useAuth

Хук используемый чаще всего - ответственный за авторизацию пользователя. Именно через него выполняются все операции - регистрация, авторизация, смена аккаунта и пр., а главное - получение сведений о пользователе.

\`\`\`jsx
const { auth, user, accounts, register, login, logout, logoutAuth, switchAuth, refresh } = useAuth();

// Вы можете импортировать только те вещи, которые вам нужны:
const { auth, user, login, register } = useAuth();
\`\`\`

Что есть что здесь?

Для начала, какие интерфейсы описывают используемые объекты:

\`\`\`tsx
// Auth.ts
export interface Auth {
    token: string;
    login: string;
    password?: string | null;
}

// User.ts
export interface User {
  id?: string;
  firstname?: string;
  lastname?: string;
  middlename?: string;
  roles?: string[];
}
\`\`\`
                `}</Markdown>
            </div>

        </BasePage>
    );
};
