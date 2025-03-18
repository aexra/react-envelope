import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import { Expander } from '../../wrappers/Expander/Expander';
import css from './Callout.module.css';

export const Callout = ({ ref, className, icon, title, type = 'info', children }) => {
    const getTitle = () => {
        return title ?? type.toUpperCase();
    };

    const getIcon = () => {
        if (icon) return icon;

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
                return css.bug;
            default:
                return css.info;
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
                return css.bug;
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