import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';
import { Close, Code, Email, Home, Logout, Moon, Visibility, Sun, Swap, User, UserAdd, UserFilled, VisibilityOff, HomeFilled, SettingsHorizontal, SettingsVertical, SettingsOutline, LogoutThick, SettingsSharp, SettingsSolid, SettingsFilled, Settings, ExperimentOutlined, Add, Bin, Remove, RefreshOutline, Edit, Pencil, PaperPlane, Palette, Package, Pin, Phone, Pizza, Party, Parking, PizzaFilled } from '../../dummies/Icons';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import DSTUNavSidebar from '../../widgets/DSTUNavSidebar/DSTUNavSidebar';
import { HeaderTitle } from '../../dummies/styleless/HeaderTitle';
import { CopyFrame } from '../../widgets/CopyFrame/CopyFrame';
import { MarkdownRenderer } from '../../dummies/styleless/MarkdownRenderer';
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
            `}</MarkdownRenderer>

            <Headline>Соглашения</Headline>

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
            `}</MarkdownRenderer>

            <Headline>Иконки</Headline>

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

            <div>
                <Headline>Компоненты</Headline>

                <MarkdownRenderer>{`
## UI

Нижняя категория - кнопочки и прочее

### Buttons

#### AccentButton
                `}</MarkdownRenderer>

                <p>В принципе, это херня из прошлого, можете забить.</p>
                <AccentButton>Я AccentButton</AccentButton>

                <Pair left={<h4>ExButton</h4>}
                      right={<StatusTag text='ЭНВЕЛОУП' type='success' className='flex-0-1'/>}/>

                <p>Вот эта штука уже используется почти везде, построена на основе HBoxPanel и имеет ряд параметров</p>
                <HBoxPanel valign='center' gap='20px'>
                    {<ExButton className={css.buttonSample}>Я ExButton</ExButton>}
                    <MarkdownRenderer className='flex-1'>{`
\`\`\`jsx
<ExButton>Я ExButton</ExButton>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel valign='center' gap='20px'>
                    {<ExButton leftIcon={<Pizza className='icon-m'/>} className={css.buttonSample}>Я ExButton с иконочкой через параметр</ExButton>}
                    <MarkdownRenderer className='flex-1'>{`
\`\`\`jsx
<ExButton leftIcon={<Pizza className='icon-m'/>}>Я ExButton с иконочкой через параметр</ExButton>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel valign='center' gap='20px'>
                    {<ExButton gap='5px' className={css.buttonSample}><Pizza className='icon-m'/>Я ExButton с иконочкой через детей</ExButton>}
                    <MarkdownRenderer className='flex-1'>{`
\`\`\`jsx
<ExButton gap='5px'><Pizza className='icon-m'/>Я ExButton с иконочкой через детей</ExButton>
\`\`\`
                    `}</MarkdownRenderer>
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
                    <MarkdownRenderer className='flex-1'>{`
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
                    `}</MarkdownRenderer>
                </HBoxPanel>

                <h4>NavSidebarButton</h4>
                <p>Это кнопка из панели навигации слева</p>
                <MarkdownRenderer>{`
\`\`\`jsx
<NavSidebarButton text={'На страницу с примерами'} icon={<Pizza/>} to={'/'}/>
\`\`\`
                `}</MarkdownRenderer>
                <NavSidebarButton text={'На страницу с примерами'} icon={<Pizza/>} to={'/'}/>

                <Pair left={<h4>RoundImageButton</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

                <Pair left={<h4>TagButton</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

                <Pair left={<h4>ToggleButton</h4>}
                      right={<StatusTag text='Сомнительно' type='warning' className='flex-0-1'/>}/>

                <MarkdownRenderer>{`
Только сейчас заметил, что работает криво с текстом, но сейчас он используется только как иконка, так шо пойдет
\`\`\`jsx
<ToggleButton text={'Я ToggleButton'}
              toggledText={'Я включенный ToggleButton'}
              toggled
              icon={<VisibilityOff/>}
              toggledIcon={<Visibility/>}/>
\`\`\`
                `}</MarkdownRenderer>

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
                    <MarkdownRenderer className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}/>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               placeholder='Плейсхолдер'
                               icon={<Pizza/>}/>
                    <MarkdownRenderer className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           placeholder='Плейсхолдер'
           icon={<Pizza/>}/>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               hint='Дио'
                               placeholder='А вот и нет, это я - Дио!'
                               icon={<User/>}/>
                    <MarkdownRenderer className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           hint='Дио'
           placeholder='А вот и нет, это я - Дио!'
           icon={<User/>}/>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               hint={'Знаешь regex("ENVELOPE")?'}
                               placeholder='Не ENVELOPE'
                               inputRef={sampleRef1}
                               regex='ENVELOPE'/>
                    <MarkdownRenderer className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           hint={'Знаешь regex("ENVELOPE")?'}
           placeholder='Не ENVELOPE'
           inputRef={sampleRef1}
           regex='ENVELOPE'/>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               readOnly
                               borderless
                               text='Я только для чтения еще и без рамок'
                               hint='Теперь это просто текст с подсказкой'/>
                    <MarkdownRenderer className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           readOnly
           borderless
           text='Я только для чтения еще и без рамок'
           hint='Теперь это просто текст с подсказкой'/>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>
                <HBoxPanel gap={'20px'} valign='center'>
                    <ExTextBox className={css.inputSample}
                               password
                               hint='Пароль'
                               placeholder='Введите пароль'/>
                    <MarkdownRenderer className={'flex-1'}>{`
\`\`\`jsx
<ExTextBox className={css.inputSample}
           password
           hint='Пароль'
           placeholder='Введите пароль'/>
\`\`\`
                    `}</MarkdownRenderer>
                </HBoxPanel>

                <Pair left={<h4>TransparentTextBox</h4>}
                      right={<StatusTag text='DEPRECATED' type='error' className='flex-0-1'/>}/>

            </div>

            
        </BasePage>
    );
};
