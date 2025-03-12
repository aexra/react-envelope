import css from './SamplesPage.module.css';
import BasePage from '../BasePage/BasePage';
import DSTUFooter from '../../widgets/DSTUFooter/DSTUFooter';

export const SamplesPage = () => {
    const setHeaderContent = () => {
        return (
            <span className={`${css.title}`}>ENVELOPE</span>
        );
    };

    return (
        <BasePage headerContent={setHeaderContent()}
                  footerContent={<DSTUFooter/>}/>
    );
};