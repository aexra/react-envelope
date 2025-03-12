import css from './HDivider.module.css';

function HDivider({ color = "var(--subtitle-font-color)", style, className, thickness = 1, margin = '8px 0' }) {
    const styles = {
        borderTop: `${thickness}px solid ${color}`,
        margin: margin,
        ...style
    };
    return <hr className={`${css.divider} ${className}`} style={styles}/>;
}

export default HDivider; 