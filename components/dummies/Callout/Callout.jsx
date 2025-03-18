import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import { Expander } from '../../wrappers/Expander/Expander';
import { Bug, Error, Info, Success, Tip, Warning } from '../Icons';
import css from './Callout.module.css';

export const Callout = ({
    ref, 
    className, 
    icon, 
    title, 
    type = 'info',
    expanded = false, 
    children
}) => {
    const getStyle = () => {
        switch (type) {
            case 'success':
                return {
                    icon: icon ?? <Success/>,
                    class: css.success,
                    divider: {
                        color: 'var(--success-color)',
                        thickness: '1px'
                    }
                };
            case 'warning':
                return {
                    icon: icon ?? <Warning/>,
                    class: css.warning,
                    divider: {
                        color: 'var(--warning-color)',
                        thickness: '1px'
                    }
                };
            case 'error':
                return {
                    icon: icon ?? <Error/>,
                    class: css.error,
                    divider: {
                        color: 'var(--error-color)',
                        thickness: '1px'
                    }
                };
            case 'tip':
                return {
                    icon: icon ?? <Tip/>,
                    class: css.tip,
                    divider: {
                        color: 'var(--tip-color)',
                        thickness: '1px'
                    }
                };
            case 'bug':
                return {
                    icon: icon ?? <Bug/>,
                    class: css.error,
                    divider: {
                        color: 'var(--error-color)',
                        thickness: '1px'
                    }
                };
            default:
                return {
                    icon: icon ?? <Info/>,
                    class: css.info,
                    divider: {
                        color: 'var(--info-color)',
                        thickness: '1px'
                    }
                };
        }
    };
    
    const styleOptions = getStyle();

    const getTitle = () => {
        return title ?? type.toUpperCase();
    };
    
    const getHeaderContent = () => {
        return (
            <HBoxPanel className={css.headerContent}
                       valign='center'
                       gap={'10px'}>
                {styleOptions.icon}
                <h4 className='m-0'>{getTitle()}</h4>
            </HBoxPanel>
        );
    };
    
    return (
        <Expander ref={ref}
                  className={`${className} ${css.callout} ${type && styleOptions.class}`}
                  headerContent={getHeaderContent()}
                  dividerStyle={styleOptions.divider}
                  expanded={expanded}>
            { children }
        </Expander>
    );
};