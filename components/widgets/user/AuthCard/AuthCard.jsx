import { useState } from 'react';
import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import css from './AuthCard.module.css';
import { Pivot } from '../../../wrappers/Pivot/Pivot';
import { TextBox } from '../../../ui/input/text/TextBox/TextBox';
import { Email } from '../../../dummies/Icons';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import HBoxPanel from '../../../layouts/HBoxPanel/HBoxPanel';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [save, setSave] = useState(false);

    return (
        <VBoxPanel gap={'20px'}>
            <TextBox borderType={'fullr'}
                     label={'E-mail'}
                     placeholder={'Введите почту'}
                     icon={<Email/>}
                     regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                     value={email}
                     onChange={setEmail}/>
            <TextBox borderType={'fullr'}
                     label={'Пароль'}
                     placeholder={'Введите пароль'}
                     password
                     regex={/^.{6,}$/}
                     limit={'16'}
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
            <ExButton className={'accent-button'} onClick={() => onLogin(email, password, save)}>SIGN IN</ExButton>
        </VBoxPanel>
    );
};

export const AuthCard = ({
    className,
    onLogin,
    onRegister
}) => {
    const [isLoginForm, setIsLoginForm] = useState();
    
    const handleLogin = (email, password, save) => {
        console.log(email, password, save);
    };

    return (
        <VBoxPanel className={`${css.card} ${className} bb`} gap={'30px'} halign='center'>
            <h2 style={{margin: '0'}}>ENVELOPE</h2>
            <Pivot keysProps={{className: 'flex row g20'}} contentProps={{style: {
                margin: '30px 0 0 0',
                alignSelf: 'stretch'
            }}} className={'center stretch-self'}>
                <Pivot.Keys>
                    <span>ВХОД</span>
                    <span>РЕГИСТРАЦИЯ</span>
                </Pivot.Keys>
                <Pivot.Items>
                    <LoginForm onLogin={handleLogin}/>
                    <VBoxPanel gap={'20px'}>

                    </VBoxPanel>
                </Pivot.Items>
            </Pivot>
        </VBoxPanel>
    );
};