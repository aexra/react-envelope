import { Pizza } from '../../dummies/Icons';
import css from './base.module.css';

export const IconTitle = ({
    className,
    text = 'ENVELOPE',
    icon = <Pizza/>
}) => {
    return (
        <div className={`${className} flex row g20 center`} style={{padding: '0 30px 0 0', borderRight: '1px solid var(--border-color)'}}>
            <h2 style={{margin: '0'}}>{text}</h2>
            <div className={`icon-l ${css.h960}`}>{icon}</div>
        </div>
    );
};