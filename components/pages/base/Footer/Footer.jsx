import css from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={`flex col ${css.foo}`}>
            <div className={`flex row ${css.links}`}>

            </div>
            <span>Powered by <a>aexra</a></span>
        </div>
    );
};