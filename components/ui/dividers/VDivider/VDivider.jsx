import css from './VDivider.module.css';

function VDivider({ color = "var(--accent-color)", style, thickness = '1px', className, margin = '0 8px' }) {
    const styles = {
        borderRight: `${thickness} solid ${color}`,
        margin: margin,
        ...style
    };
    return <hr className={`${css.vdivider} ${className}`} style={styles}/>;
}

export default VDivider; 