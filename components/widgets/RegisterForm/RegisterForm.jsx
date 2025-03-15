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
import { Email, User, UserFilled } from '../../dummies/Icons';
import { DSTULabeledForm } from '../DSTULabeledForm/DSTULabeledForm';

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
            firstname: fnameRef.current.value,
            lastname: lnameRef.current.value,
            middlename: mnameRef.current.value,
            // studentId: studentIdRef.current.value,
            login: emailRef.current.value,
            password: passwordRef.current.value
        });
    };

    return (
        <DSTULabeledForm label={'Личный кабинет'} iconContent={<UserFilled className='icon-l'/>}>
            <VBoxPanel className={css.formBody} gap='30px'>
                <ExTextBox hint='Логин' 
                           icon={<Email/>}
                           inputRef={emailRef}
                           regex="."
                           placeholder="Введите логин"/>
                <ExTextBox hint='Фамилия' 
                           icon={<User/>}
                           inputRef={lnameRef}
                           regex="."
                           placeholder="Введите фамилию"/>
                <ExTextBox hint='Имя' 
                           icon={<User/>}
                           inputRef={fnameRef}
                           regex="."
                           placeholder="Введите имя"/>
                <ExTextBox hint='Отчество' 
                           icon={<User/>}
                           inputRef={mnameRef}
                           placeholder="Введите отчество"/>
                {/* <ExTextBox hint='Номер зачетной книжки' 
                           icon={identityIcon}
                           inputRef={studentIdRef}
                           regex="."
                           placeholder="Введите номер ЗК"/> */}
                <ExTextBox hint='Пароль' 
                           icon={<User/>}
                           inputRef={passwordRef}
                           isPassword={true}
                           regex="."
                           placeholder="Введите пароль"/>
                <FlowPanel gap='10px'>
                    <TagButton className={`dstu-accent-button`} onClick={handleBackButtonClick}>НАЗАД</TagButton>
                    <TagButton className={`dstu-accent-button h-last`} onClick={handleRegisterButtonClick}>ЗАРЕГИСТРИРОВАТЬСЯ</TagButton>
                </FlowPanel>
            </VBoxPanel>
        </DSTULabeledForm>
    );
}

export default RegisterForm;