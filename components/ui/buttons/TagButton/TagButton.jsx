import ExButton from '../ExButton/ExButton';
import css from './TagButton.module.css';

function TagButton({ ref, className, onClick, children }) {
    return (
        <ExButton ref={ref}
                  className={`${className} ${css.tag}`}
                  onClick={onClick}>{children}</ExButton>
    );
}

export default TagButton;