import css from './LoginForm.module.css';

import VBoxPanel from '../../../layouts/VBoxPanel/VBoxPanel';
import ExTextBox from '../../../ui/input/text/ExTextBox/ExTextBox';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import FlowPanel from '../../../layouts/FlowPanel/FlowPanel';
import TagButton from '../../../ui/buttons/TagButton/TagButton';
import { useRef } from 'react';
import { DSTULabeledForm } from '../../DSTULabeledForm/DSTULabeledForm';
import { UserFilled } from '../../../dummies/Icons';

function LoginForm({ onRegisterClick, onLoginClick }) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLoginButtonClick = (e) => {
        if (onLoginClick) onLoginClick(e, {
            login:    usernameRef.current.value, 
            password: passwordRef.current.value
        });
    };

    const handleRegisterButtonClick = (e) => {
        if (onRegisterClick) onRegisterClick(e);
    };

    const handleRecoverButtonClick = (e) => {
        
    };

    return (
        <DSTULabeledForm label={'Личный кабинет'} iconContent={<UserFilled className='icon-l'/>}>
            <VBoxPanel className={css.formBody} gap='30px'>
                <ExTextBox hint='Логин' 
                           icon={<UserFilled/>}
                           inputRef={usernameRef}
                           regex="."
                           placeholder="Введите логин"/>
                <ExTextBox hint='Пароль' 
                           icon={<UserFilled/>}
                           inputRef={passwordRef}
                           password
                           regex="."
                           placeholder="Введите пароль"/>
                <ExButton className={`dstu-accent-button`} onClick={handleLoginButtonClick}>ВОЙТИ</ExButton>
                <VBoxPanel gap='5px'>
                    <h3>Для обучающихся:</h3>
                    <FlowPanel gap='10px'>
                        <TagButton className={`dstu-accent-button`} onClick={handleRegisterButtonClick}>РЕГИСТРАЦИЯ</TagButton>
                        <TagButton className={`dstu-accent-button`} onClick={handleRecoverButtonClick}>ВОССТАНОВЛЕНИЯ ПАРОЛЯ</TagButton>
                    </FlowPanel>
                </VBoxPanel>
            </VBoxPanel>
        </DSTULabeledForm>
    )
}

export default LoginForm;