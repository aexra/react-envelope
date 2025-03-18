import HBoxPanel from '../../layouts/HBoxPanel/HBoxPanel';
import VBoxPanel from '../../layouts/VBoxPanel/VBoxPanel';
import css from './Callout.module.css';

export const Callout = ({ ref, className, icon, type = 'info', children }) => {
    return (
        <VBoxPanel gap={'10px'}
                   className={`${css.callout} ${className}`}
                   ref={ref}>
            <HBoxPanel className={`${css.header}`}>

            </HBoxPanel>
            <VBoxPanel>
                { children }
            </VBoxPanel>
        </VBoxPanel>
    );
};