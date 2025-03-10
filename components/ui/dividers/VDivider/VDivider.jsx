import css from './VDivider.module.css';

function VDivider({ color = "var(--subtitle-color)", style, className, margin = '0 8px' }) {
    const styles = {
        borderRight: `1px solid ${color}`,
        margin: margin,
        ...style
    };
    return <hr className={`${css.vdivider} ${className}`} style={styles}/>;
}

export default VDivider; 