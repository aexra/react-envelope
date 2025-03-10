import css from './LoginForm.module.css';
import userIcon from '../../../assets/images/user.png';

import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import IconLabel from '../../ui/labels/IconLabel/IconLabel';
import ExTextBox from '../../ui/input/ExTextBox/ExTextBox';
import ExButton from '../../ui/buttons/ExButton/ExButton';
import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import { useRef } from 'react';

function LoginForm({ onRegisterClick, onLoginClick }) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLoginButtonClick = (e) => {
        if (onLoginClick) onLoginClick(e, {
            username: usernameRef.current.value, 
            password: passwordRef.current.value
        });
    };

    const handleRegisterButtonClick = (e) => {
        if (onRegisterClick) onRegisterClick(e);
    };

    const handleRecoverButtonClick = (e) => {
        
    };

    return (
        <VBoxPanel className={`dstuLabelForm panel`}>
            <IconLabel className={css.label} text='Личный кабинет' icon={userIcon}/>
            <VBoxPanel className={css.formBody} gap='30px'>
                <ExTextBox hint='Логин' 
                           icon={userIcon}
                           inputRef={usernameRef}
                           regex="."
                           placeholder="Введите логин"/>
                <ExTextBox hint='Пароль' 
                           icon={userIcon}
                           inputRef={passwordRef}
                           isPassword={true}
                           regex="."
                           placeholder="Введите пароль"/>
                <ExButton onClick={handleLoginButtonClick}>ВОЙТИ</ExButton>
                <VBoxPanel gap='5px'>
                    <h3>Для обучающихся:</h3>
                    <FlowPanel gap='10px'>
                        <TagButton onClick={handleRegisterButtonClick}>РЕГИСТРАЦИЯ</TagButton>
                        <TagButton onClick={handleRecoverButtonClick}>ВОССТАНОВЛЕНИЯ ПАРОЛЯ</TagButton>
                    </FlowPanel>
                </VBoxPanel>
            </VBoxPanel>
        </VBoxPanel>
    )
}

export default LoginForm;