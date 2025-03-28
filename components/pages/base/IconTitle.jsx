import { Pizza } from '../../dummies/Icons';
import css from './base.module.css';

export const IconTitle = ({
    className,
    text = 'ENVELOPE',
    icon = <Pizza/>
}) => {
    return (
        <div className={`${className} flex row g20 center ${css.title}`}>
            <span style={{margin: '0'}} className='h1'>{text}</span>
            <div className={`icon-l ${css.h960}`}>{icon}</div>
        </div>
    );
};