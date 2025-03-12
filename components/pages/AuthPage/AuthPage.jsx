import { useState } from 'react';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import LoginForm from '../../widgets/LoginForm/LoginForm';
import BasePage from '../BasePage/BasePage';
import css from './AuthPage.module.css';
import RegisterForm from '../../widgets/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import TagButton from '../../ui/buttons/TagButton/TagButton';
import homeIcon from '../../../assets/images/home.png';
import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import { login, register } from '../../../api/auth';
import { me } from '../../../api/user';
import { useAuth } from '../../../hooks/useAuth';
import toast from 'react-hot-toast';

export const AuthPage = () => {
    const navigate = useNavigate();
    const [isLogin, setLoginMode] = useState(true);
    const { login: setAuth } = useAuth();

    const handleLogin = async (e, data) => {
        try {
            const lr = await login(data);

            setAuth({
                login: data.username,
                password: data.password,
                token: lr.data.token
            }, true);

            const mr = await me();
            
            setAuth({
                id: mr.data.id,
                login: data.username,
                password: data.password,
                firstname: mr.data.firstname,
                lastname: mr.data.lastname,
                middlename: mr.data.middlename,
                token: lr.data.token
            }, false);

            if (mr.data.middlename) toast.success(`Добро пожаловать, ${mr.data.firstname} ${mr.data.middlename}!`);
            else toast.success(`Добро пожаловать, ${mr.data.login}!`);

            navigate('/');
        } catch (error) {
            toast.error("Ошибка авторизации");
            console.log("Login error:", error.response.data);
        }
    };

    const handleRegister = async (e, data) => {
        try {
            const response = await register(data);
            await handleLogin(null, data);
        } catch (error) {
            toast.error("Ошибка авторизации");
            console.log("Login error:", error.response.data);
        }
    };

    const navigateToHomeClicked = (e) => {
        navigate('/');
    };

    return (
        <BasePage hasHeader={false}
                  hasFooter={false}
                  hasNavSidebar={false}
                  className={css.page}>
            <VBoxPanel className={css.container} halign='center' valign='center'>
                {isLogin ? <VBoxPanel gap='15px'>
                    <LoginForm onRegisterClick={(e) => { setLoginMode(false) }}
                               onLoginClick={handleLogin}/>
                    <TagButton className={css.homeButton}
                               onClick={navigateToHomeClicked}>
                        <HBoxPanel gap='10px' valign='center'>
                            <img className='icon-s' src={homeIcon} alt="Home"/>НА ГЛАВНУЮ
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