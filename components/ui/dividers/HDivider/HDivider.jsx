import css from './HDivider.module.css';

function HDivider({ color = "var(--accent-color)", style, className, thickness = '1px', margin = '8px 0' }) {
    const styles = {
        borderTop: `${thickness} solid ${color}`,
        margin: margin,
        ...style
    };
    return <hr className={`${css.divider} ${className}`} style={styles}/>;
}

export default HDivider; 