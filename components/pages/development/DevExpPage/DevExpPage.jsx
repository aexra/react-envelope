import css from './DevExpPage.module.css';
import { PageBase } from '../../base/PageBase/PageBase';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import { login, register } from '../../../../../api/auth';

export const DevExpPage = () => {
    const handleClick = async () => {
        // const lr = await login();
        const rr = await register({
            login: 'defdXs@yandex.ru',
            password: 'abobabebebe'
        }, {
            firstname: 'Никита',
            lastname: 'Фомин',
            middlename: 'Алексеевич'
        });

        console.log(rr);
    };
    
    return (
        <PageBase>
            <ExButton onClick={handleClick} className={'accent-button'}>Test me</ExButton>
        </PageBase>
    );
};