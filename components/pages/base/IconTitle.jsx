import { Pizza } from '../../dummies/Icons';

export const IconTitle = ({
    className,
    text = 'ENVELOPE',
    icon = <Pizza/>
}) => {
    return (
        <div className={`${className} flex row g20 center`}>
            <h2>{text}</h2>
            <div className='icon-l'>{icon}</div>
        </div>
    );
};