import { useNavigate } from 'react-router-dom';
import { Pizza } from '../../dummies/Icons';
import css from './base.module.css';

export const IconTitle = ({
    className,
    text = 'ENVELOPE',
    icon = <Pizza/>
}) => {
    const navigate = useNavigate();

    return (
        <div className={`${className} flex row g20 center pointer ${css.title}`} onClick={() => navigate('/')}>
            <span style={{margin: '0'}} className='h1'>{text}</span>
            <div className={`icon-l ${css.h960}`}>{icon}</div>
        </div>
    );
};