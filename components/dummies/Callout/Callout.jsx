import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import { Expander } from '../../wrappers/Expander/Expander';
import { Error, Info, Success, Tip, Warning } from '../Icons';
import css from './Callout.module.css';

export const Callout = ({ ref, className, icon, title, type = 'info', children }) => {
    const getTitle = () => {
        return title ?? type.toUpperCase();
    };

    const getIcon = () => {
        if (icon) return icon;

        switch (type) {
            case 'success':
                return <Success/>;
            case 'warning':
                return <Warning/>;
            case 'error':
                return <Error/>;
            case 'tip':
                return <Tip/>;
            case 'bug':
                return <Error/>;
            default:
                return <Info/>;
        }
    };
    
    const getHeaderContent = () => {
        return (
            <HBoxPanel className={css.headerContent}
                       valign='center'
                       gap={'10px'}>
                {getIcon()}
                <h4 className='m-0'>{getTitle()}</h4>
            </HBoxPanel>
        );
    };

    const getClass = () => {
        switch (type) {
            case 'success':
                return css.success;
            case 'warning':
                return css.warning;
            case 'error':
                return css.error;
            case 'tip':
                return css.tip;
            case 'bug':
                return css.error;
            default:
                return css.info;
        }
    };
    
    return (
        <Expander ref={ref}
                  className={`${className} ${css.callout} ${type && getClass()}`}
                  headerContent={getHeaderContent()}>
            { children }
        </Expander>
    );
};