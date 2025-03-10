import css from './AccentButton.module.css';

function AccentButton({ children, onClick, style, className }) {
    return (
        <button className={`accent-item ${className} ${css.accent}`} onClick={onClick} style={style}>{children}</button>
    );
}

export default AccentButton;