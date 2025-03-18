import { useEffect, useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import LoginForm from '../../widgets/LoginForm/LoginForm';
import BasePage from '../BasePage/BasePage';
import css from './AuthPage.module.css';
import RegisterForm from '../../widgets/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import { useAuth } from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { HomeFilled } from '../../dummies/Icons';

export const AuthPage = () => {
    const navigate = useNavigate();
    const [isLogin, setLoginMode] = useState(true);
    const { auth, user, login, register } = useAuth();
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    // Side-effect after auth done
    useEffect(() => {
        if (hasLoggedIn && auth && user) {
            if (user.middlename) toast.success(`Добро пожаловать, ${user.firstname} ${user.middlename}!`);
            else toast.success(`Добро пожаловать, ${auth.login}!`);

            navigate('/');
        }
    }, [hasLoggedIn, auth, user]);

    const handleLogin = async (e, data) => {
        try {
            // TODO: Добавить выбор сохранить пароль и текущий аккаунт если он есть или нет
            await login({
                login: data.login,
                password: data.password
            }, true, true);

            setHasLoggedIn(true);
        } catch (er) {
            toast.error("Ошибка авторизации");
            console.log(er);
        }
    };

    const handleRegister = async (e, data) => {
        try {
            // TODO: Добавить выбор сохранить пароль или нет
            const response = await register(
                {
                    login: data.login,
                    password: data.password
                },
                {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    middlename: data.middlename
                    // TODO: Добавить еще если нужно
                }
            );
            
            if (response.status !== 200) {
                toast('Ошибка регистрации');
            } else {
                toast(`${data.login}, аккаунт создан!`);
                setLoginMode(true);
            }
        } catch (er) {
            toast.error("Ошибка регистрации");
            console.log(er);
        }
    };

    const navigateToHomeClicked = (e) => {
        navigate('/');
    };

    return (
        <BasePage className={css.page}>
            <VBoxPanel className={css.container} halign='center' valign='center'>
                {isLogin ? <VBoxPanel gap='15px'>
                    <LoginForm onRegisterClick={(e) => { setLoginMode(false) }}
                               onLoginClick={handleLogin}/>
                    <TagButton className={css.homeButton}
                               onClick={navigateToHomeClicked}>
                        <HBoxPanel gap='10px' valign='center'>
                            <HomeFilled className='icon-m'/> НА ГЛАВНУЮ
                        </HBoxPanel>
                    </TagButton>
                </VBoxPanel> : 
                           <RegisterForm onBackClick={(e) => { setLoginMode(true) }}
                                         onRegisterClick={handleRegister}/>}
            </VBoxPanel>
        </BasePage>
    );
}

export default AuthPage;