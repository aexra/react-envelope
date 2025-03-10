import FlowPanel from '../../layouts/FlowPanel/FlowPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import ExTextBox from '../../ui/input/ExTextBox/ExTextBox';
import IconLabel from '../../ui/labels/IconLabel/IconLabel';
import css from './RegisterForm.module.css';
import userIcon from '../../../assets/images/user.png';
import { useRef } from 'react';
import identityIcon from '../../../assets/images/id-card.png';
import emailIcon from '../../../assets/images/email.png';

function RegisterForm({ onBackClick, onRegisterClick }) {
    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const mnameRef = useRef(null);
    // const studentIdRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleBackButtonClick = (e) => {
        if (onBackClick) onBackClick(e);
    };

    const handleRegisterButtonClick = (e) => {
        if (onRegisterClick) onRegisterClick(e, {
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            middleName: mnameRef.current.value,
            // studentId: studentIdRef.current.value,
            username: emailRef.current.value,
            password: passwordRef.current.value
        });
    };

    return (
        <VBoxPanel className={`dstuLabelForm panel`}>
            <IconLabel className={css.label} text='Регистрация' icon={userIcon}/>
            <VBoxPanel className={css.formBody} gap='30px'>
                <ExTextBox hint='Логин' 
                           icon={emailIcon}
                           inputRef={emailRef}
                           regex="."
                           placeholder="Введите логин"/>
                <ExTextBox hint='Фамилия' 
                           icon={userIcon}
                           inputRef={lnameRef}
                           regex="."
                           placeholder="Введите фамилию"/>
                <ExTextBox hint='Имя' 
                           icon={userIcon}
                           inputRef={fnameRef}
                           regex="."
                           placeholder="Введите имя"/>
                <ExTextBox hint='Отчество' 
                           icon={userIcon}
                           inputRef={mnameRef}
                           placeholder="Введите отчество"/>
                {/* <ExTextBox hint='Номер зачетной книжки' 
                           icon={identityIcon}
                           inputRef={studentIdRef}
                           regex="."
                           placeholder="Введите номер ЗК"/> */}
                <ExTextBox hint='Пароль' 
                           icon={userIcon}
                           inputRef={passwordRef}
                           isPassword={true}
                           regex="."
                           placeholder="Введите пароль"/>
                <FlowPanel gap='10px'>
                    <TagButton onClick={handleBackButtonClick}>НАЗАД</TagButton>
                    <TagButton className={css.lastTag} onClick={handleRegisterButtonClick}>ЗАРЕГИСТРИРОВАТЬСЯ</TagButton>
                </FlowPanel>
            </VBoxPanel>
        </VBoxPanel>
    );
}

export default RegisterForm;