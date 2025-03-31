import css from './DevExpPage.module.css';
import { PageBase } from '../../base/PageBase/PageBase';
import ExButton from '../../../ui/buttons/ExButton/ExButton';
import { login, register } from '../../../../../api/auth';
import { LargeSlider } from '../../../wrappers/sliders/LargeSlider/LargeSlider';
import { Home, Package, Pizza, User } from '../../../dummies/Icons';

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
            {/* <ExButton onClick={handleClick} className={'accent-button'}>Test me</ExButton> */}
            <LargeSlider loopMode='reverse' loop>
                <div className={`${css.slide} ${css.s1}`}></div>
                <div className={`${css.slide} ${css.s2}`}></div>
                <div className={`${css.slide} ${css.s3}`}></div>
                <div className={`${css.slide} ${css.s4}`}></div>
            </LargeSlider>
        </PageBase>
    );
};