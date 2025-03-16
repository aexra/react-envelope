import HBoxPanel from '../HBoxPanel/HBoxPanel';
import css from './Pair.module.css';

export const Pair = ({ ref, className, left, right, gap = '10px', valign = 'center', halign = 'start' }) => {
    return (
        <HBoxPanel ref={ref} 
                   className={`${className} ${css.pair}`}
                   gap={gap}
                   valign={valign}
                   halign={halign}>
            {left}
            {right}
        </HBoxPanel>
    );
};