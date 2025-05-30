import { use, useState } from 'react';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import css from './AuthCard.module.css';
import { Pivot } from '../../../wrappers/Pivot/Pivot';
import { TextBox } from '../../../ui/input/text/TextBox/TextBox';
import { Email, User } from '../../../dummies/Icons';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';

const LoginForm = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [save, setSave] = useState(false);

    return (
        <VBoxPanel gap={'20px'}>
            <TextBox borderType={'fullr'}
                     label={'Имя пользователя'}
                     placeholder={'Введите логин'}
                     icon={<User/>}
                     regex={/./}
                     value={login}
                     onChange={setLogin}/>
            <TextBox borderType={'fullr'}
                     label={'Пароль'}
                     placeholder={'Введите пароль'}
                     password
                     regex={/^.{6,}$/}
                    //  limit={'16'}
                     min={'6'}
                     strictLimit
                     value={password}
                     onChange={setPassword}/>
            <HBoxPanel gap={'10px'}>
                <input 
                    type="checkbox" 
                    id="saveAccount" 
                    checked={save} 
                    onChange={(e) => setSave(e.target.checked)} 
                />
                <label htmlFor="saveAccount">Сохранить аккаунт?</label>
            </HBoxPanel>
            <ExButton className={'accent-button'} onClick={() => onLogin({
                login: login,
                password: password, 
                save: save
            })}>ВОЙТИ</ExButton>
        </VBoxPanel>
    );
};

const RegisterForm = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [fn, setFN] = useState('');
    const [ln, setLN] = useState('');
    const [mn, setMN] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <VBoxPanel gap={'20px'}>
            <TextBox borderType={'fullr'}
                     label={'E-mail'}
                     placeholder={'Введите почту'}
                     icon={<Email/>}
                     regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                     name={'email'}
                     value={email}
                     onChange={setEmail}/>
            <TextBox borderType={'fullr'}
                     label={'Фамилия'}
                     placeholder={'Введите фамилию'}
                     icon={<User/>}
                     regex={/./}
                     name={'family-name'}
                     value={ln}
                     onChange={setLN}/>
            <TextBox borderType={'fullr'}
                     label={'Имя'}
                     placeholder={'Введите имя'}
                     icon={<User/>}
                     regex={/./}
                     name={'given-name'}
                     value={fn}
                     onChange={setFN}/>
            <TextBox borderType={'fullr'}
                     label={'Отчество'}
                     placeholder={'Введите отчество'}
                     icon={<User/>}
                     name={'additional-name'}
                     value={mn}
                     onChange={setMN}/>
            <TextBox borderType={'fullr'}
                     label={'Имя пользователя'}
                     placeholder={'Введите логин'}
                     icon={<User/>}
                     regex={/./}
                     name={'nickname'}
                     value={username}
                     onChange={setUsername}/>
            <TextBox borderType={'fullr'}
                     label={'Пароль'}
                     placeholder={'Введите пароль'}
                     password
                     regex={/^.{6,}$/}
                    //  limit={'16'}
                     min={'6'}
                     strictLimit
                     value={password}
                     onChange={setPassword}/>
            <ExButton className={'accent-button'} onClick={() => onRegister({
                login: username,
                email: email, 
                password: password,
                firstname: fn, 
                lastname: ln, 
                middlename: mn, 
            })}>ЗАРЕГИСТРИРОВАТЬСЯ</ExButton>
        </VBoxPanel>
    );
};

export const AuthCard = ({
    className,
    onLogin,
    onRegister,
    selectedFrame,
    onSelect,
    ...props
}) => {
    return (
        <VBoxPanel className={`${css.card} ${className} bb`} gap={'30px'} halign='center' {...props}>
            <span style={{margin: '0', fontSize: 'var(--h1-font-size)', fontWeight: 'bold'}}>ENVELOPE</span>
            <Pivot keysProps={{className: 'flex row g20'}} contentProps={{style: {
                margin: '30px 0 0 0',
                alignSelf: 'stretch'
            }}} className={'center stretch-self'}
                value={selectedFrame}
                onChange={onSelect}>
                <Pivot.Keys>
                    <span>ВХОД</span>
                    <span>РЕГИСТРАЦИЯ</span>
                </Pivot.Keys>
                <Pivot.Items>
                    <LoginForm onLogin={onLogin}/>
                    <RegisterForm onRegister={onRegister}/>
                </Pivot.Items>
            </Pivot>
        </VBoxPanel>
    );
};